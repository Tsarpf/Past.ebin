import React, {
	Component
}
from 'react';
import styles from '../../css/app.css';
import {
	connect
}
from 'react-redux';

import {
	bindActionCreators
}
from 'redux';

import * as HomeActions from '../actions/home';
import * as PasteStates from '../constants/NewPasteAttempt';

import {
	Link
}
from 'react-router';
import { Card, TextInput, Button } from 'belle';

@
connect( state => {
	return {
		recents: state.Home.recents,
		newPasteState: state.Home.postData.state,
		newPasteId: state.Home.postData.id
	};
} )
export default class Home extends Component {
	constructor( props, context ) {
		super( props, context );
		this.actions = bindActionCreators( HomeActions, props.dispatch );
		this.state = {
			pasteContent: this.props.pasteContent || ''
		};
	}
	static propTypes = {
		recents: React.PropTypes.array.isRequired,
		pasteContent: React.PropTypes.string
	}
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	}
	componentWillMount() {
		this.actions.fetchRecents();
	}
	componentWillReceiveProps( newProps ) {
		switch ( newProps.newPasteState ) {
			case PasteStates.SUCCEEDED:
				this.context.router.transitionTo( '/paste/' + newProps.newPasteId );
				this.actions.resetPostData();
				break;
			case PasteStates.FAILED:
				console.log( 'paste failed' );
				break;
			default:
				break;
		}
	}
	handleChange( event ) {
		this.setState( {
			pasteContent: event.target.value
		} );
	}
	postNew() {
		this.actions.postNewPaste( {
			content: this.state.pasteContent
		} );
	}
	render() {
		const {
			recents
		} = this.props;
		var content = this.state.pasteContent;
		return (
			<div>
				<TextInput placeholder="put yo stuff in here" value={content} onChange={::this.handleChange} allowNewLine={ true }/>
				<br/>
				<Button onClick={ ::this.postNew }> Paste </Button>

                <h3 className={styles.recentHeader}> Last 20 pastes </h3>
				{ recents.map( paste =>
                    <Card className={styles.paste}>
                        <Link to={`/paste/${paste._id}`}>{paste.name}</Link>
                    </Card>
				) }
			</div>
		);
	}
}

import React, {
	Component
}
from 'react';
//import styles from '../../css/app.css';
import {
	connect
}
from 'react-redux';

import {
	bindActionCreators
}
from 'redux';

import * as HomeActions from '../actions/home';

import {
	Link
}
from 'react-router';

@
connect( state => {
	console.log( state );
	return {
		recents: state.Home.recents
	};
} )
export default class Home extends Component {
	constructor( props, context ) {
		super( props, context );
		this.actions = bindActionCreators( HomeActions, props.dispatch );
	}
	static propTypes = {
		recents: React.PropTypes.array.isRequired
	}
	componentWillMount() {
		this.actions.fetchRecents();
	}
	render() {
		const {
			recents
		} = this.props;
		return (
			<div>
				{recents.map( paste =>
					<p>
						<Link to={`/paste/${paste.id}`}>{paste.name}</Link>
					</p>
				)}
				<textarea placeholder="paste your stuff here"/>
				<button onClick={this.actions.fetchRecents}> Ses! </button>
			</div>
		);
	}
}

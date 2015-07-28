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
					<p> {paste} </p>
				)}
				<button onClick={this.actions.fetchRecents}> Ses! </button>
				<textarea placeholder="paste your stuff here"/>
			</div>
		);
	}
}

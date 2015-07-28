import styles from '../../css/app.css';
import React from 'react';
import {
	connect
}
from 'react-redux';
import {
	bindActionCreators
}
from 'redux';
import * as PasteActions from '../actions/paste';

@
connect( state => {
	return {
		content: state.Paste.content
	};
} )
export default class Paste extends React.Component {
	constructor( props, context ) {
		super( props, context );
		this.actions = bindActionCreators( PasteActions, props.dispatch );
	}
	componentWillMount() {
		var id = this.props.params.pasteId;
		this.actions.fetchPasteById( {
			id
		} );
	}
	render() {
		return (
			<div>
				<span className={styles.paste}> {this.props.content} </span>
			</div>
		);
	}
}

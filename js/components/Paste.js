import React from 'react';
export default class Paste extends React.Component {
	render() {
		const id = this.props.params.pasteId;
		return (
			<p> {id} </p>
		);
	}
}

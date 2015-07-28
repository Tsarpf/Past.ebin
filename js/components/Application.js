import React from 'react';
import styles from '../../css/app.css';
export default class Application extends React.Component {
	constructor( props, context ) {
		super( props, context );
	}
	render() {
		return (
			<div>
				<h1 className={styles.text}>Past ebin header placeholder</h1>
				<div id="ses">
					{this.props.children}
				</div>
				<p> Footer placeholder </p>
			</div>
		);
	}
}

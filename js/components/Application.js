import React from 'react';
import styles from '../../css/app.css';
import {
	Link
}
from 'react-router';
export default class Application extends React.Component {
	constructor( props, context ) {
		super( props, context );
	}
	render() {
		return (
			<div>
				<h1 className={styles.text}>
					<Link to="/">Past ebin</Link>
				</h1>
				<div id="ses">
					{this.props.children}
				</div>
                <hr/>
				<p> Footer placeholder </p>
			</div>
		);
	}
}

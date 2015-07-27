import React from 'react';
import styles from '../../css/app.css';

export default React.createClass( {
	render() {
		return (
			<div>
				<h1 className={styles.text}>Start your app here! test</h1>
				<textarea placeholder="paste your stuff here"/>
			</div>
		);
	}
} );

import React, {
	Component
}
from 'react';
import styles from '../../css/app.css';
import {
	connect
} 
from 'react-redux';

@
connect( state => ( {
	recents: state.recents
} ) )
export default class Home extends Component {
	static propTypes = {
		recents: React.PropTypes.array.isRequired
	}
	render() {
		const {
			recents, dispatch
		} = this.props;
		return (
			<div>
				<textarea placeholder="paste your stuff here"/>
				{recents.map(paste => 
					<p> {paste} </p>
				)}
				<button> Ses! </button>
			</div>
		)
	}
}

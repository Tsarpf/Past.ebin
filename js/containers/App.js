import React from 'react';
import {
	combineReducers
}
from 'redux';
import {
	Provider
}
from 'react-redux';
import {
	createStore, renderDevTools
}
from '../utils/devTools';

import * as reducers from '../reducers/index';
import Application from '../components/Application';
import Home from '../components/Home';

import {
	Router, Route
}
from 'react-router';


const store = createStore( combineReducers( reducers ) );

export default React.createClass( {
	render() {
		const {
			history
		} = this.props;
		return (
			<div>
				<Provider store={store}>
					{renderRoutes.bind(null, history)}
				</Provider>

				{ /* only renders when running in DEV mode */
					renderDevTools( store )
				}
			</div>
		);
	}
} );


function renderRoutes( history ) {
	console.log( 'ses' );
	return (
		<Router history={history}>
			<Route component={Application}>
				<Route path="/" component={Home} />
			</Route>
		</Router>
	)
}

import React from 'react';
import {
	combineReducers, applyMiddleware
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
import Paste from '../components/Paste';

import {
	Router, Route
}
from 'react-router';

import thunk from 'redux-thunk';
const reducer = combineReducers( reducers );
const createStoreWithMiddleware = applyMiddleware( thunk )( createStore );
const store = createStoreWithMiddleware( reducer );

export default class App extends React.Component {
	constructor( props, context ) {
		super( props, context );
	}
	static propTypes = {
		history: React.PropTypes.object.isRequired
	}
	render() {
		const {
			history
		} = this.props;
		return (
			<Provider store={store}>
				{renderRoutes.bind( null, history ) }
			</Provider>
		);
	}
}

function renderRoutes( history ) {
	return (
		<Router history={history}>
			<Route component={Application}>
				<Route path="/" component={Home} />
				<Route path="/paste/:pasteId" component={Paste}/>
			</Route>
			{ /* only renders when running in DEV mode */
				renderDevTools( store )
			}
		</Router>
	);
}

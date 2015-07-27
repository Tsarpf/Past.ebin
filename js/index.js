import React from 'react';
import App from './containers/App';
import BrowserHistory from 'react-router/lib/BrowserHistory';

React.render( <App history={new BrowserHistory()}/>, document.getElementById( 'main' ) );

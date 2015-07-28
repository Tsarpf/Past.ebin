import 'whatwg-fetch';
import {
	FETCH_RECENTS
}
from '../constants/ActionTypes';

const apiUrl = 'localhost:3001';
export function fetchRecents( options ) {
	const {
		pageOffset
	} = options || {};
	const url = `http://${apiUrl}/recent/page/${pageOffset ? pageOffset : 0}`;
	console.log( url );

	return dispatch => {
		fetch( url ).then( res => {
			console.log( 'got response' );
			res.json().then( result => {
				console.log( 'ses' );
				dispatch( {
					type: FETCH_RECENTS,
					recents: result
				} );
			} );
		} );
	};
}

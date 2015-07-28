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
	console.log( `using api url ${url} ` );
	return dispatch => {
		fetch( url ).then( res => {
			res.json().then( result => {
				dispatch( {
					type: FETCH_RECENTS,
					recents: result
				} );
			} );
		} );
	};
}

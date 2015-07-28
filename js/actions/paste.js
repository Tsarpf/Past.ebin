import 'whatwg-fetch';

import {
	FETCH_PASTE_BY_ID
}
from '../constants/ActionTypes';

const apiUrl = 'prototyping.xyz:3001';

export function fetchPasteById( options ) {
	const {
		id
	} = options;
	const url = `http://${apiUrl}/get/paste/${id}`;
	console.log( url );
	return dispatch => {
		fetch( url ).then( res => {
			res.json().then( result => {
				dispatch( {
					type: FETCH_PASTE_BY_ID,
					data: result
				} );
			} );
		} );
	};
}

import 'whatwg-fetch';
import {
	FETCH_RECENTS, POST_NEW_PASTE_SUCCEEDED
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

function checkStatus( response ) {
	if ( response.status >= 200 && response.status < 300 ) {
		return response;
	} else {
		let error = new Error( response.statusText );
		error.response = response;
		throw error;
	}
}

function parseJSON( response ) {
	return response.json();
}

export function postNewPaste( options ) {
	console.log( 'posting new paste' );
	const {
		content
	} = options;

	const url = `http://${apiUrl}/new/`;
	console.log( `using post url ${url} ` );

	return dispatch => {
		fetch( url, {
				method: 'post',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify( {
					content: content
				} )
			} )
			.then( checkStatus )
			.then( parseJSON )
			.then( ( data ) => {
				dispatch( {
					type: POST_NEW_PASTE_SUCCEEDED,
					result: data
				} );
			} );
	};
}

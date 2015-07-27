import 'whatwg-fetch';
import * from '../constants/ActionTypes';

const apiUrl = 'localhost:3000';
export function fetchRecents( options ) {
	const {
		pageOffset
	} = options;
	const url = `$(apiUrl)/recent/?page=$(pageOffset ? pageOffset : 0)`;

	return dispatch => {
		fetch( url ).then( res => {
			res.json().then( result => dispatch( {
				type: constknts.FETCH_RECENTS,
				recents: result
			} ) )
		} )
	}
}

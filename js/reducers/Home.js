import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
	recents: [ 'loading' ]
};
//let defaultState = {recents: []};

export default function home( state = defaultState, action ) {
	switch ( action.type ) {
		case ActionTypes.FETCH_RECENTS:
			return {
				recents: action.recents
			};
		default:
			return state;
	}
}

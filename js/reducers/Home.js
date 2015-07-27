import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {};

export default function( state = defaultState, action ) {
	switch ( action.type ) {
		case ActionTypes.FETCH_RECENTS:
			return {
				recents: action.recents
			}
		default:
			return state;
	}
}

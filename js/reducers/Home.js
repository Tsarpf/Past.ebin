import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
	recents: [ 'loading' ],
	postData: {
		state: null,
		_id: null
	}
};
//let defaultState = {recents: []};

export default function home( state = defaultState, action ) {
	switch ( action.type ) {
		case ActionTypes.FETCH_RECENTS:
			return {
				recents: action.recents,
				postData: state.postData
			};
		case ActionTypes.POST_NEW_PASTE_SUCCEEDED:
			return {
				recents: state.recents,
				postData: action.result
			};
		case ActionTypes.RESET_POST_DATA:
			return {
				recents: state.recents,
				postData: defaultState.postData
			};
		default:
			return state;
	}
}

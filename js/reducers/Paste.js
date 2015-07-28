import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {};

export default function home( state = defaultState, action ) {
	switch ( action.type ) {
		case ActionTypes.FETCH_PASTE_BY_ID:
			return {
				_id: action.data._id,
				content: action.data.content
			};
		default:
			return state;
	}
}

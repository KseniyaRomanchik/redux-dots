import constants from "./../constants/DotsConstants"

let initialState = {
	dots: [],
	size: { width: 0, height: 0}
}

export default function userstate(state = initialState, action) {

	switch (action.type) {
		case constants.SET_DOT_STATE: {

			return Object.assign({}, state, {
				dots: action.payload
			});
		}
		case constants.SET_DOTS: {

			return Object.assign({}, state, 
				action.payload);
		}
		default : { return state }
	}
}
let initialState = {
	dots: [],
	size: { width: 10 , height: 8 }
}

// for(let i = 0; i < initialState.size.height; i++){
// 	for(let j = 0; j < initialState.size.width; j++){

// 		initialState.dots.push({ id: `${i}-${j}`, state: false})
// 	}	
// }

export default function userstate(state = initialState, action) {

	switch (action.type) {
		case "SET_DOT_STATE": {

			let newDots = state.dots.map((it) => {

				if(it.id == action.payload.id){
					it.state = action.payload.state
				}
				return it
			});

			return Object.assign({}, state, {
				dots: action.payload.dots
			});
		}
		case "SET_FIELD_SIZE": {

			// let dots = []

			// for(let i = 0; i < action.payload.height; i++){
			// 	for(let j = 0; j < action.payload.width; j++){

			// 		dots.push({ id: `${i}-${j}`, state: false})
			// 	}	
			// }
			return Object.assign({}, state, {
				// dots: action.payload.dots,
				size: action.payload.size
			});//{ dots : dots, size : action.payload }
		}
		default : { return state }
	}
}
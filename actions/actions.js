export function setDotState(dotState) {

	return {
		type: "SET_DOT_STATE",
		payload: dotState
	}
}

export function setFieldSize(fieldSize) {

	return {
		type: "SET_FIELD_SIZE",
		payload: fieldSize
	}
}

function setDotsAction(data) {

	return {
		type: "SET_DOTS",
		payload: data	
	}
}

export function setDots(width, height) {

	return (dispatch) => {
		let dots = DotsService.createDots(width, height);


		dispatch(setDotsAction({
			dots: dots,
			size: {
				width,
				height
			}
		}));
	}
}
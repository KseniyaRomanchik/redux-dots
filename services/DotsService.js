class DotsService {
	static createDots(width, height) {

		let dots = []

		for(let i = 0; i < height; i++){
			for(let j = 0; j < width; j++){

				initialState.dots.push({ id: `${i}-${j}`, state: false})
			}	
		}
		return dots;
	}
}


return DotsService;
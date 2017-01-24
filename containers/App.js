import React, {Component} from "react"

class App extends Component{

	render(){

		return (
			<div>
				<a>kkk</a>
				{ this.props.children }
			</div>
		)
	}
}
export default App;

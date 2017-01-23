import React, {Component} from "react"

class Field extends Component{

	constructor(props) {
		super(props);
		this.state = { width : this.props.initialSize.width, height: this.props.initialSize.height }
	}

	changeSize(e) {

		this.setState({ [e.target.getAttribute("id")] : e.target.value })
	}

	setSize(){

		this.props.setFieldSize({ width: this.state.width, height: this.state.height })
	}

	render(){

		return(
			<form>
				<input type="number" id="width" onInput={ this.changeSize.bind(this) } />
				<input type="number" id="height" onInput={ this.changeSize.bind(this) } />
				<button type="button" onClick={ this.setSize.bind(this) }>Change</button>
			</form>
		)
	}
}

// Field.propTypes ={

// 	data: PropTypes.boolean.isRequired,
// 	setDotState: PropTypes.func.isRequired
// }

export default Field
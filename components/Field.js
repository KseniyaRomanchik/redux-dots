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

		this.props.setDots(this.state.width, this.state.height)
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

Field.propTypes = {
	initialSize: React.PropTypes.object.isRequired,
	setDots: React.PropTypes.func.isRequired
}

export default Field
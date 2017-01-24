import React, {Component} from "react"

class Dot extends Component{

	addState() {

		this.props.setState(this.props.id)
	}

	render(){

		return(
			<td id={ this.props.id } onClick={ this.addState.bind(this) }>
				<span className={ this.props.state ? "colored" : "" }></span>
			</td>
		)
	}
}

Dot.propTypes = {
	setState: React.PropTypes.func.isRequired,
	id: React.PropTypes.string.isRequired
}

export default Dot
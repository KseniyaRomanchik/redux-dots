import React, {Component} from "react"

class Dot extends Component{

	addDot() {

		this.props.setDotState({ state : true, id : this.props.id })
	}

	render(){

		return(
			<td id={ this.props.id } onClick={ this.addDot.bind(this) }>
				<span className={ this.props.state ? "colored" : "" }></span>
			</td>
		)
	}
}

// Dot.propTypes ={

// 	data: PropTypes.boolean.isRequired,
// 	setDotState: PropTypes.func.isRequired
// }

export default Dot
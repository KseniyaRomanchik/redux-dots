import React, {Component} from "react"

class Dot extends Component{

	addDot() {

		let dots = this.props.dots.map((it) => {

			if(it.id == this.props.id){
				it.state = true
			}
			return it
		})

		this.props.setDotState(dots)
	}

	render(){

		return(
			<td id={ this.props.id } onClick={ this.addDot.bind(this) }>
				<span className={ this.props.state ? "colored" : "" }></span>
			</td>
		)
	}
}

Dot.propTypes = {
	setDotState: React.PropTypes.func.isRequired,
	id: React.PropTypes.string.isRequired,
	state: React.PropTypes.bool.isRequired,
	dots: React.PropTypes.array.isRequired
}

export default Dot
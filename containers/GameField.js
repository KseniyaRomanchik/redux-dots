import React, {Component} from "react"
import PlayField from "./../components/playField"
import Field from "./../components/Field"
import * as actions from "../actions/actions"
import { connect } from "react-redux"


class GameField extends Component{

	render(){


		


		return (
			<div>
				<PlayField setDotState={this.props.setDotState}dots={this.props.dots} width={this.props.size.width} />
				<Field initialSize={ this.props.size } setDots={ this.props.setDots }/>
			</div>
		)
	}
}

function mapStateToProps (state) {
	
	return {
		size: state.dots.size,
		dots: state.dots.dots
	}
}

export default connect(mapStateToProps, {
		setDotState: actions.setDotState,
		setDots: actions.setDots
	})(GameField);
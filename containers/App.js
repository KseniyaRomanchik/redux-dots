import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Dots from "./../components/Dot"
import Field from "./../components/Field"
import * as actions from "../actions/actions"

class App extends Component{

	constructor(props) {
		super(props);
	}

	render(){

		let rows = []
		let field = this.props.dots.dots.map((item, index) => {

			return  (
				<Dots key={ index } id={item.id} state={item.state} dots={this.props.dots.dots} setDotState={this.props.actions.setDotState} /> 
				)			
		})

		for(let i = 0; i < this.props.dots.size.height; i++){

			rows.push(field.splice(0, this.props.dots.size.width))
		}

		rows = rows.map((it,ind) => {

			return (
				<tr key={ ind }>
					{ it }
				</tr>
			)
		})

		return (
			<div>
				<table>
					<tbody>
						{ rows }
					</tbody>
				</table>
				<Field initialSize={ this.props.dots.size } setDots={ this.props.actions.setDots }/>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		size: state.size,
		dots: state.dots
	}
}

function mapDispatchToProps(dispatch) {

	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
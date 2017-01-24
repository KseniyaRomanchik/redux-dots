import React, {Component} from "react";
import Dot from "./../components/Dot";

class PlayField extends Component{

	changeDotsState(id) {

		console.log(this)	

		let dots = this.props.dots.map((it) => {

			if(it.id == id){
				it.state = true;
			}
			return it
		});

		this.props.setDotState(dots) // call action
	}

	render(){

		// console.log(this.props.dots)

		let rows = []

		this.props.dots.forEach((item, index) => {	

			if(!(index % this.props.width)) { 
				rows.push([])
			}
			rows[rows.length - 1].push(<Dot key={ index } state={ item.state } id={ item.id } setState={this.changeDotsState.bind(this)} />)

		})

		let field = rows.map((it,ind) => {

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
						{ field }
					</tbody>
				</table>
			</div>
		)
	}
}

export default PlayField
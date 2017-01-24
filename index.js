import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { Provider } from "react-redux"
import store from "./store/configureStore"
import ScoreTable from "./containers/ScoreTable"
import GameField from "./containers/GameField"
import App from "./containers/App"

import * as actions from "./actions/actions"

store.dispatch(actions.setDots(10, 8)); //init

render(
	<Provider store={ store }>
		<Router history={ hashHistory }>
			<IndexRoute component={ App } />
			<Route path="/" component={ ScoreTable } />
			<Route path="/game" component={ GameField }  />
		</Router>
	</ Provider>,
	document.getElementById("container")
);
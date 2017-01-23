import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
import App from "./containers/App"

import * as actions from "../actions/actions"
actions.

const store = configureStore()




store.dispatch(setDots(10, 10)); //init

render(
	<Provider store={store}>
		<App />
	</ Provider>,
	document.getElementById("container")
);
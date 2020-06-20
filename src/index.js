import React from 'react'
import ReactDOM from 'react-dom'
import { rootReducer } from './reducers/rootReducer'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import { PhotoPage } from './components/PhotoPage'

const store = createStore(rootReducer, compose(
	applyMiddleware(
		thunk
	),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

const app = (
	<Provider store={store}>
		<React.StrictMode>
			<Router>
				<Route path="/:filter?" component={App} />
				<Route path='/photo/:id' component={PhotoPage} />
			</Router>
		</React.StrictMode>
	</Provider>
)

ReactDOM.render(
	app,
	document.getElementById('root')
)

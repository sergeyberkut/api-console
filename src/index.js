import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from './store/reducers/rootReducer'
import Sendsay from 'sendsay-api'
import App from './App'
import { SendsayServiceProvider } from './components/SendsayContext'


const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

const sendsayService = new Sendsay()

const app = (
	<Provider store={store}>
		<SendsayServiceProvider value={sendsayService}>
			<BrowserRouter>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</BrowserRouter>
		</SendsayServiceProvider>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))


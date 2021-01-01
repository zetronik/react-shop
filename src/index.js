import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import App from './App'
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-notifications-component/dist/theme.css'
import './index.css'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <ReactNotification />
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
  app, document.getElementById('root')
);

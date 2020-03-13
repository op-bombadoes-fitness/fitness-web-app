import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllPlans, getAllSessions } from './actions'
import App from './containers/App'
import Nav from './containers/Nav'
import Footer from './containers/Footer'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// import { BrowserRouter } from 'react-router-dom';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllPlans())
store.dispatch(getAllSessions())

render(
  <Provider store={store}>
    <Nav />
    <App />
    <Footer />
  </Provider>,
  document.getElementById('root')
)
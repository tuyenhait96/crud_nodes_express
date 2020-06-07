import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [thunk]
  
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer'

const middlewares = [logger];

const composedEnhancer = compose(applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer,composedEnhancer )

export default store;
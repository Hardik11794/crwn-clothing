import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer'

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
    
} 
  
// const composedEnhancer = compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const composedEnhancer = compose(applyMiddleware(...middlewares))
export const store = createStore(rootReducer,composedEnhancer )
export const persistor = persistStore(store);
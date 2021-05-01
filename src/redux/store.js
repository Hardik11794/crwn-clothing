import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer'

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

if (process.env.NODE_ENV === 'production') {
    const composedEnhancer = compose(applyMiddleware(...middlewares))
} else {
    const composedEnhancer = compose(applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())    
}
    



export const store = createStore(rootReducer,composedEnhancer )

export const persistor = persistStore(store);

// export default {store, persistor};
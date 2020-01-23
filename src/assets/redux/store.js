import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { fetchCollectionsStart } from './shop/shop.sagas'

import rootReducer from './root-reducer'

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(fetchCollectionsStart);

const persistor = persistStore(store);

export { store, persistor };
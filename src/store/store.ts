import { Middleware, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { configureStore, combineReducers, Tuple } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootSaga from '../store/sagas/rootSaga';
import rootReducers from '../store/slices/rootReducer';

const isDev = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'topup-root',
  storage,
  whitelist: ['auth'],
};

const _combineReducers = combineReducers({
  ...rootReducers,
});

const reducers = persistReducer(persistConfig, _combineReducers);

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];
if (isDev) {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: false,
  }).concat(middlewares),
});
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store as any);

export type Reducers = ReturnType<typeof _combineReducers>;
export { store, persistor };

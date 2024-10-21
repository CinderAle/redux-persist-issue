import { PureComponent } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { thunk } from 'redux-thunk';

import { rootReducer } from './reducers';
import { rootWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware();

// Для redux-persist
const persistConfig = {
    key: 'root',
    storage,
};

console.log(typeof PureComponent);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import { rootWatcher } from './saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PureComponent } from 'react';

const sagaMiddleware = createSagaMiddleware();

// Для redux-persist
const persistConfig = {
    key: 'root',
    storage,
};

console.log(typeof PureComponent);

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);

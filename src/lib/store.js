import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from 'apis/productApis';
// import rtkQueryErrorLogger from 'stores/errorLoggingMiddleware';
// import appReducer from 'app/appSlice';
// import cartsReducer from 'features/carts/cartSlice';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  // carts: cartsReducer,
  // app: appReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    api.middleware,
    // rtkQueryErrorLogger,
  ],
});

export default store;

setupListeners(store.dispatch);

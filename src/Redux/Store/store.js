import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

// Import Reducers
import { rootReducer } from '../Reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product'],
  stateReconciler: hardSet,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunk)));
export let persistor = persistStore(store);

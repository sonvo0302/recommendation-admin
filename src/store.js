import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './utils/syncState';

const middleware = compose(applyMiddleware(thunk, logger));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, middleware);

store.subscribe(
	throttle(() => {
		saveState({
			auth   : store.getState().auth,
			common : store.getState().common
		});
	}, 1000)
);

export default store;

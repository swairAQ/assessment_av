

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';


// Redux: Store
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        createLogger(),
    ),
);


// Exports
export {
    store,
};
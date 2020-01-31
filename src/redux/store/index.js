import { createStore } from 'redux';
import { composeMiddleware } from '../middlewares';
import rootReducer from '../reducers/rootReducer';

export const Store = createStore(
    rootReducer,
    composeMiddleware
);






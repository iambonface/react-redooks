import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeMiddleware } from '../middlewares';
import { Provider } from 'react-redux';
import App from '../../components/App/App';
import rootReducer from '../reducers/rootReducer';

export const Store = createStore(
    rootReducer,
    composeMiddleware
);




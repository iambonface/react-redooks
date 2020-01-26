import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

export const logger = createLogger()
export const middlewares = [thunk, logger]
export const middleWareEnhancer = applyMiddleware(...middlewares)
export const composeMiddleware = composeWithDevTools(middleWareEnhancer)


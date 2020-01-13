import { Middleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  
  middlewares.push(logger);
}

export default middlewares;

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';
import stats from './reducers/stats';
import UI from './reducers/ui';
import refbooks from './reducers/ref-books';


let middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

const initialState = {};


const reducers = combineReducers({
  user,
  stats,
  UI,
  refbooks
});

const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';
import stat from './reducers/stat';
import UI from './reducers/ui';

let middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

const initialState = {};


const reducers = combineReducers({
  user,
  stat,
  UI
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

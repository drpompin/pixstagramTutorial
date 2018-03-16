import { createStore, compose } from 'redux';

//import { applyMiddleWare } from 'redux';
//import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


//create object for dedault data
const defaultState = {
  posts,
  comments
};

//to setup store with redux devtools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

//for hot reloading, this is the how to procedure
if (module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;

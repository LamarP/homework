// store/store.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import logger from 'redux-logger';

let configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger)
  )
);

export default configureStore;

const middleware = store => next => action => {
  const result = next(action);
  // side effect using `result`
  return result;
};

const logger = store => next => action => {

  console.log('Action received:', action);
  console.log('State pre-dispatch:', store.getState());

  let result = next(action);

  console.log('State post-dispatch:', store.getState());

  return result;
};

npm install redux - logger

	// store/store.js

	import { createStore, applyMiddleware } from 'redux';
	import rootReducer from 'reducers';
	import thunk from 'redux-thunk';
	import logger from 'redux-logger';

  let configureStore = (preloadedState = {}) => (
    createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk, logger)
    )
  );

export default configureStore;
  
//Debugging arrow functions

const addFruit = fruit => ({
  type: "ADD_FRUIT",
  fruit
});

//in order to put a debugger we need to convert it into a functin with an explicit return statement:

const addFruit = fruit => {
  return {
    type: "ADD_FRUIT",
    fruit
  };
};
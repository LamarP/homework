import { createStore } from "redux";
//create store takes in a reducer, and two optional args
//const store = createStore(() => ({}), preloadedState, enhancers);
import teasReducer from '../reducers/teas_reducer';
const configureStore = (preloadedState = {}) => {
  return createStore(teasReducer, preloadedState);
}
//wraps the function so that it is not static

export default configureStore;
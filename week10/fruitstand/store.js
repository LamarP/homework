import { createStore } from `redux`;
import reducer from './reducer.js';
import { addOrange } from "./reducer.js";

const store = createStore(reducer);

//A Redux store is just an object that holds the application state, wrapped in a minimalist API
//Our store will handl the inventory. We will use actions to add fruit to the apps state

store.getState(); // []
store.dispatch(addOrange);
store.getState(); // ['orange']

const display = () => {
  console.log(store.getState());
};

const unsubscribeDisplay = store.subscribe(display);
store.dispatch(addOrange); // ['orange', 'orange']

unsubscribeDisplay();
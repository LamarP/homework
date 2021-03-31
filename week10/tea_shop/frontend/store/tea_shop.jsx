import configureStore from './store/store';
import receiveGreenTea from './actions/actions';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root'
document.addEventListener("DOMContentLoaded", ( => {
  console.log("Welcome to the tea shop")
  const store = configureStore();

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);


}));
//how to create a store
//store.js
import { createStore } from `redux`;
import reducer from './reducer.js';

const store = createStore(reducer);

//updating the store

store.dispatch(action);

//acion in redux is just a poain object with:
//-a type key indicating the action being performed
//-optional payload keys containing any new information

//example
// action.js

const addOrange = {
  type: "ADD_FRUIT",
  fruit: "orange"
};

// reducer.js
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];
    default:
      return state;
  }
};
export default reducer;

//store.js
import { createStore } from "redux";
import reducer from "./reducer.js";

const store = createStore(reducer);

store.getState(); // []
store.dispatch(addOrange);
store.getState(); //['orange]

//Subscribing to the Store

//Once the store has processed a dispatch(), it triggers all its subscribers.
//Subscribers are callbacks that can be added to the store via subscribe()

//callback display example being subscribed to our examples store

const display = () => {
  console.log(store.getState());
};

const unsubscribeDisplay = store.subscribe(display);
store.dispatch(addOrange); //['orange', 'orange']

// ...later (when we are done displaying)
unsubscribeDisplay();

//React Components
//Connecting our React view layer to the store is accomplished via store.subscribe().

//define a React component FruitStand that takes the app's store as a prop and subscribes its forceUpdate() method to the store

//components/fruit_stand.jsx
import React from "react";

class FruitStand extends React.Component {
  constructor(props) {
    super(props);

    this.forceUpdate = this.forceUpdate.bind(this);
    this.unsubscribe = this.props.store.subscribe(this.forceUpdate);
  }

  render() {
    return (
      <ul>
        {this.props.store.getState().map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ul>
    );

  }

  //when we are done with our component we unsubscribe any calllbacks we registered to the store
  componentWillUnmount() {
    this.unsubscribe();
  }

}
export default FruitStand;

// fruit_reducer.js

const fruitReducer = (state = [], action) => {
  //when the store initializes it calls its reducer with an undefined state,
  //allowing the reducer to dictate the store's initial state via the default value in the state parameter
  Object.freeze(state);
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];
    default:
      return state;
  }
};

export default fruitReducer;
//the bulk of the reducer function then implements updates to the state.
//our reducers initial state is set to an empry array. The reducer returns a new array  with action.fruit appended to the previous state
//if action.type is "ADD_FRUIT". Otherwise, it returns the state unchanged.
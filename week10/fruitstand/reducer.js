//when store.dispatch() is called, the store passes its current state, along with the action being dispatched, to the reducer.
//the reducer function takes two arguments(state, and action) and returns the next state

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];
    default:
      return state;
  }
};

export default reducer;
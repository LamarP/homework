//Application State

//-Minimize api calls to our backend
//-Ability to make changes on teh wevpage that don't need to be saved to the database
//-Rendering speed advantage

//Redux

//We use this to hold our globally state
//redux is just a pojo
//poweful because of its restrictions


//Redux Principles
//-Single Source of truth
//-state is read-only


//Store
//-Object managing the state of the application
//-With Redux, we only have one store(other Flux implementations have multiple)
//-use createStore(RootReducer, [preloadedState], [enhancer]) to build store object.

//Store API
//-getState() -see the current state of your application
//-dispatch(action) - dispatch an action to update state
// we make changes with a reducer by specifying the changes in the action

//Action creators
//a function that returns an action
//action is an object with a type property/type key.
//sometimes an action can carry a payload
//action creators to dynamically determine the payload
//abstract this logic out of components
//use constants for all 'type' values

//Reducers
//Pure functions that update state based on the actions type
//Returns a new object with updated state, or the same state
//RootReducer combines multiple reducers into one using combineReducers
//Each reducer receives every dispatched action but only deals with its own slice of state
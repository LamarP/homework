//React-Redux
//Library or package for connecting reacting and redux
//Accompolishes this in 2 ways:
//Allows the threading of Redux state as props to components
//Allows threading of functions that can update Redux state to components

//Redux makes our react app much more organized

//Getting the State to Components
//Provider
// takes in store as a prop
// provides the store to the component hierarchy

//connect
//connects given component to a specific part of store (specific slices of state/actions to dispatch)

//Components

//Presentational 
//solely concerned with rendering jsx as product of props/state
//may or may not have a corresponding container

//Container

//Listens for changes to redux store, wraps presentational component to send to the store

//
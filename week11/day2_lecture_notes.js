//React + Redux rails review

import { Component } from "react";

//Container/Store/Rails

//Component / componentDidMount()
//Dispatches a thunk action(function)
//Everytime you dispatch, it goes to the store
//Thunk middleware checks if its a function, if so calls the function which makes an ajax GET request to the rails backend, hits the controller, which
//packages an response and sends it back to the store, its now a normal action and continiues to next middleware and then heads to RootReducer,
//the reducers do something with the action and updates the state, redux lets subscribers(containers) know of the state change, causing the container to rerender



//start of the cycle 

componentDidMount(){
  this.props.fetchAllTeas();
}

//jbuilder basics
//replace the render json: variable of a controllers action
//instead we will be rendering a .json.jbuilder file

//Jbuilder common methods
//-extract!
//-set!
//-array!
//-partial!

// @teas.each do | tea |
//   JSON.set! tea.id do
    
//   end

  //The way you organize your store in Redux changes the way you access data later on in your components and reducers.
  //Normalization
  // a way to structure your data so that there are no duplicates
  //flat state, no nested objects
  //store references to those objects
  

  //1 duplicated data is hard to manage
  //2 Given an items's ID, we can find it easily
  //3 Avoid complex logic in reducers to handle deeply nested objects
  //4 Avoid unnecessary re-renders of connected components

  //How do we normalize state shape
  //every type of data gets its own table in the state
  //POJO where keys are IDs of items, and values are item objects themselves
  //Any references to other individual items should be done by storing the items's ID
  //Arrays of IDs should be used to indicate ordering.
  //any data with belongs_to relationship stores ID of associated data
  //data with has_many relationship stores array of IDs of associated data
  //Joins tables occupy their own slice of state
  //anytime you see a new slice of state you need to make a new reducer for that slice of state


//We need to package the tea info as well as any transactions associated with that tea



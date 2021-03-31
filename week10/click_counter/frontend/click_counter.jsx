import React from 'react';
// how to import react

class ClickCounter extends React.Component {
  //class def inherits from React.Component
  constructor(props) {
    //constructor initialize, takes in props, calls super so you can use 'this'
    super(props);
    this.state = { count: 0 };
    //where we keep track of the count
    //state and prop are just js objects with key value pairs
  }
  //event listener that sets our state incremeted by 1
  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }
  
  //changes to props or state calls the render function and rerenders
  //never update props
  //this.set state takes in a function of key value pairs we wont to update
  
  render() {
    //any time we call render we want to return html, cause this is what the user sees
    //can only return one root/parent with any number of children it wants
    return (
      //onClick event applies the click function binding this
      <div>
        <button onClick={this.click.bind(this)}>CLICK ME!!!</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default ClickCounter;
//events handlers set by passing prop: onClick, onChange, onWhatever The EventNameIs
//value is pointer to handler function
//event handler function is passed event object
//event object contains target, current target, time, mouse location, etc
//almost always will prevent default


//jsx Browser cannot natively understand; must be transpiled into raw js
//similar to erb in rails must be compiled into raw html
//<span>{this.state.count}</span>
//in reaw js React.createElement('span', {}, this.state.count)
//takes 3 args, html tag, props, inner html we want to show

//babel-core -the transpiling language

const handleClick = event => {
  event.preventDefault();
  alert("clicked!");
};

const SimpleButton = () => (
  <input type="submit" onClick={handleClick}>
    Click Me!
  </input>
);

//whenever the above input is clicked, handleClick() will be called before any of the normal things a submit button would do (like issue a post request)
//Redux is a JavaScript framework for managing the frontend state of a web application. It allows us to store inormation in an organized manner in a web app and to quickly retrieve that information from
//Redux is a JavaScript framework for managing the frontend state of a web app
//allows us to store info in an ofganized manner in a web app and quickly retrieve that info

VOCABULARY
//State
//the state of a program means all the info stored by that program at a particular point in time.The job of redux is to store the state of your app
//and make it available to the entire app

//Store
//The Redux store is a single JavaScript object with a few methods, including getState, dispatch(action), and subscribe(listener)
//Any state you want Redux to handle is held in the store

//Action
// Ex: "The redux store is updated by dispatchin actions"
//An action is a pojo with a type property. Actions contain info that can be used to update the store, they can be dispatched, i.e. sent to the 
//store, in respnse to user actions or ajax requests. Typically Redux apps use functions called action creators that return actions. Action creators can take arguments which allow them to customize the data containded in the actions they generate

//Pure function
//A function is pure if its behavior depends only on its arguments and it has no side effects. This means the function cant depend on the value
//of any variables that arent passed to ti as arguments, and it cant alter the state of the  program
//or any variable existing outside itself. It simply takes in arguments and returns  value

//Reducer
//Ex: Redux handles actions using reducers
//A reducer is a function that is called each time an action is dispatched. The reducer receives an action and the current state as arguments
// and returns an updated state.
//Redux reducers are required to be pure functions of the dispatched action and the curren state.
//predictable behavior and potentially reversed

//Middleware
//Ex: you can customize your response to dispatched actions using middleware
//
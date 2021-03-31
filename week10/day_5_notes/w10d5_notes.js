//Provider: Setting context

import { connect } from "react-redux"

//Using the Provider component defined by the react-redux package, we can pass the store to deeply nested components without explicit threading.
//create a root component which takes as an argument store and wraps our App commponent with the Provider component like so:

//In our entry file, we'll render a Root component which passes the store to all nested compnents 'invisibly'. 

//The Provider is simply a React component in which we wrap the rest of the application. It receives the store as a prop.
//The provider then sets a store context(i.e. an invisible prop), which is passed down to all of its children. because we wrapped the entire app in the provider, all our components will receive the store context.
//Components that need to access the store context will have to connect(), whcih converts the store context into a store prop. 

//React-Redux: connect()
//The react-redux package allows us to access the store context set by the provider in a powerful and convenient way via the connect() method.
//Using connect(), we can pass specific slices of the store's state and specific action-dispatches to a React component as props.

//Signature
// connect() is a higher-order function. It takes two arguments (plus a couple optional args) and returns a function:

const createConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

//createConnectedComponent then takes your React component and returns a new React component:

const ConnectedComponent = createConnectedComponent(MyComponent);


//mapStateToProps(state, ownProps)
//This first arg to connect() is a function, mapStateToProps. It tells connect() how to map the state into your component's props.
//it taks the stores state as an arg, provided by the providers store context, and returns an object containing the relevant props for your component.

const MyComponent = ({ name }) => (
  <div>{name}</div>
);

const mapStateToProps = state => ({
  name: state.name;
});
const ConnectedComponent = connect(mapStateToProps)(MyComponent);
//in the example above, connected component will render MyComponent, passing name as a prop.

//mapDispatchToProps
//mapDispatchToProps is the second argument to connect(). It is a function that accepts the store's dispatch method and returns an object containing functions
// that can be called to dispatch actions to the StorageEvent. Tese action dispatchers are then passed as props to the component

const deleteTodo = id => ({ type: "DELETE_TODO", id }); //action creators
const addTodo = msg => ({ typs: "ADD-TODO", msg });

const mapDispatchToProps = dispatch => ({
  handleDelete: id => dispatch(deleteTodo(id)),
  handleAdd: msg => dispatch(addTodo(msg))
});

function connect(mapStateToProps, mapDispatchToProps) {
  // returns a function that takes your component as an argument
  return function(YourAwesomeComponent) {
    
    

    //your mapStateToProps function gets called with the store's state
    const stateProps = mapStateToProps(store.getState());
    // your mapDispatchToProps function gets called with the stores dispatch function
    const dispatchProps = mapDispatchToProps(store.dispatch);

    // returns a react component that renders your component with all the props
    return function Connect(moreProps) {
      const props = Object.assign(stateProps, dispatchProps, moreProps);

      return <YourAwesomeComponent {...props} />;
    };
  };
}

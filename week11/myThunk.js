const myThunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  } else {
    //next is the next middleware (if there is one)
    //otherwise next is a dispatch to reducers
    return next(action);
  }
}

export default myThunk;
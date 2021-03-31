import { RECEIVE_TEA } from '.teas_reducer';
const teasReducer = (state, action) => {
  Object.freeze(state);
  //extra line of precaution to freeze the current state
  const nextState = Object.assign({}, state);
  //creates a new state with with the same stuff inside;

  switch (action.type) {
    case 'RECEIVE_TEA':
      nextState[action.tea.id] = action.tea;
      return nextState;
    default:
      return state;
  }
}

export default teasReducer;
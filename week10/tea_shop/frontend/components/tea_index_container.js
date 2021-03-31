import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea } from '../actions/tea_actions';
const mapStateToProps = state => {
  return ({
    teas: Object.values(state.teas)
  })
}
//responsible for giving access to the props being passed to teaindex

const mapDispatchToProps = dispatch => {
  //function that receives state from connect
  return ({
    receiveTea: tea => dispatch(receiveTea(tea))
  })
}

export default connect(mapStateToProps, callback2)(TeaIndex);
//takes 2 args that are functions
//passes state to callback 1
//passes dispatch to callback2
//connect returns a function that takes in a component (TeaIndex)

//container is what is connected to the store
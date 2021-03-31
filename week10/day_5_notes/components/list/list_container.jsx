import { connect } from 'react-redux';
import { resetItems } from '../../actions/items'
import List from '../list'; //presentational component to connect

const mapStateToProps = (state) => ({ // map slice of state to props object
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({//create action dispacher
  resetItems: () => dispatch(resetItems());
});

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;


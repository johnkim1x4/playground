import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import everything from actionCreators
import * as actionCreators from '../actions/actionCreators';
// import Main
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
// state => props
// takes this.props.* and maps it to state

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
// dispatch => props

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
// takes the states and the dispatches
// call it to the Main, add all of the props and adds it to main
// actionCreators: addComment, removeComment, increment
// data: posts, comments

export default App;

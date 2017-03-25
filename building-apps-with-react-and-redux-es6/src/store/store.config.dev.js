import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'; //Used for Async opperations
import { courseReducer } from '../reducers/courseReducer';
import { authorReducer } from '../reducers/authorReducer';
import { ajaxStatusReducer } from '../reducers/ajaxStatusReducer';


export const config = ( initialState = {} ) => {

  //mirror of state from original app
  const reducer = combineReducers({
    courses: courseReducer,
    authors: authorReducer,
    ajaxCallsInProgress: ajaxStatusReducer
  });

  // return Createstore function here,
  // this will get fired as soon as config runs
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(reduxImmutableStateInvariant(), thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

};
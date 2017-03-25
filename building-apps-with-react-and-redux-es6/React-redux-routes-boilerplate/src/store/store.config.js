import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import thunk from 'redux-thunk'; //Used for Async opperations
import { courseReducer } from '../reducers/courseReducer';


export const config = ( initialState = {} ) => {

  //mirror of state from original app
  const reducer = combineReducers({
    courses: courseReducer
  });

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(reduxImmutableStateInvariant()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};
import expect from 'expect';
import {createStore, compose, combineReducers} from 'redux';

import intialState from '../../reducers/initialState';
import {authorReducer} from '../../reducers/authorReducer';
import {courseReducer} from '../../reducers/courseReducer';
import {ajaxStatusReducer} from '../../reducers/ajaxStatusReducer';
import * as courseActions from '../../actions/courseActions';

describe('Store', () => {

  it('Should handle creating courses', () => {

    //mirror of state from original app
    const reducer = combineReducers({
      courses: courseReducer,
      authors: authorReducer,
      ajaxCallsInProgress: ajaxStatusReducer
    });

    const store = createStore(reducer, intialState);
    
    const course = {
      title: 'clean Code'
    };
    
    // Create action
    // Could create multiple dispatches to test multiple items
    const action = courseActions.createCoursesSuccess(course);
    store.dispatch(action);

    //assert
    const actualState = store.getState().courses[0]; //get the first course as our testable example since we only added one above

    //expect
    const expected = {
      title: "clean Code"
    };

    expect(actualState).toEqual(expected);

  });

});
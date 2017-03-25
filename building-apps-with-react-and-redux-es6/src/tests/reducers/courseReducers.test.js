import expect from 'expect';
import { courseReducer } from '../../reducers/courseReducer';
import * as actions from '../../actions/courseActions';

describe( 'Course Reducer', () => {


  it('Should add course when passed CREATE_COURSE_SUCCESS', () => {

    //initial state
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {
      title: 'C'
    };

    //Setup action that gets called
    const action = actions.createCoursesSuccess(newCourse);

    //call reducer
    const newState = courseReducer(initialState, action);

    //assertion - createCourseSuccess reducer - returns all the courses + the new course added in a new array
    expect(newState.length).toEqual(3);

    //make sure the new courses are in the right order
    expect(newState[0].title).toEqual('A');
    expect(newState[2].title).toEqual('C');

  });

  it('Should add course when passed UPDATE_COURSE_SUCCESS', () => {

    //initial state
    const initialState = [
      {id:'A', title: 'A'},
      {id:'B', title: 'B'},
      {id:'C', title: 'C'}
    ];

    const updatedCourse = {
      id: 'C',
      title: 'New Title'
    };

    //Setup action that gets called
    const action = actions.updateCoursesSuccess(updatedCourse);

    //call reducer
    const newState = courseReducer(initialState, action);

    //enzyme find method...
    const courseIndex = initialState.findIndex( x => x.id === updatedCourse.id); //2
    const updatedIndex = newState.findIndex( x => x.id === updatedCourse.id);
    const updatedCoursePath = newState.find(a => a.id == updatedCourse.id);
    const unTouchedCourse = newState.find(a => a.id == 'A');

    //assertion - createCourseSuccess reducer - returns all the courses + the new course added in a new array
    expect(newState.length).toEqual(3);

    //make sure the new courses are updated
    expect(updatedCoursePath.title).toEqual('New Title');
    expect(unTouchedCourse.title).toEqual('A');

    //expect updated course toBe in the same index as it originally was in the first array
    expect(updatedIndex).toBe(courseIndex);

  });


});
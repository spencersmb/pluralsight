import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const courseReducer = (state = initialState.courses, action) => {

  switch(action.type){
    // EXAMPLE CREATED IN FIRST DEMO
    // case types.CREATE_COURSE:
    //   return [
    //     ...state,
    //     {...action.course} //special babel feature + eslint
    //     // Object.assign({}, action.course)
    //   ];

    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSES_SUCCESS:
      return [
        ...state,
        action.course
      ];

    case types.UPDATE_COURSES_SUCCESS:
      
      // Map over state and return a new array of the updated course + the old courses
      return state.map( (course, index) => {

        if(course.id !== action.course.id){
          
          // This isn't the item we care about - keep it as-is
          return course;
        }
        
        // Otherwise, this is the one we want - return an updated object
        return action.course;

      } );
    //old filter example for ref
      // return[
      //   ...state.filter( course => course.id !== action.course.id ),
      //   action.course
      // ];

    default:
      return state;
  }

};
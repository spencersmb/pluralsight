import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const createCourse = (course) => {
  return{
    type: types.CREATE_COURSE,
    course
  };
};

export const loadCoursesSuccess = courses => {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
};

export const createCoursesSuccess = course => {
  return {
    type: types.CREATE_COURSES_SUCCESS,
    course
  };
};

export const updateCoursesSuccess = course => {
  return {
    type: types.UPDATE_COURSES_SUCCESS,
    course
  };
};

export const loadCourses = () => {
  return (dispatch) => {

    dispatch(beginAjaxCall());

    //make api call  //this returns a promise
    return courseApi.getAllCourses()
      .then( courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch( error => {
        throw(error);
      });
  };
};

export const saveCourse = (course) => {
  return (dispatch, getState) => {

    dispatch(beginAjaxCall());

    return courseApi.saveCourse(course)
      .then( course => {
        //pull in state from STORE
        const courses = getState().courses;

        //check the index of the new item vs. the current store
        let courseIndex = courses.findIndex( x => x.id === course.id);

        //if there already is an ID, just update the course, otherwise its new and we need to create it and add it to the store array on the end
        courseIndex >= 0 ? dispatch(updateCoursesSuccess(course)) : dispatch(createCoursesSuccess(course));

      })
      .catch( error => {
        
        dispatch(ajaxCallError());
        throw(error);
        
      });
  };
};

import expect from 'expect';
import * as courseActions from '../courseActions';
import * as types from '../actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe( 'Course Actions', () => {

  describe( 'createCourseSuccess', () => {

    it('Should call CREATE_COURSE_SUCCESS action', () => {

      const course = {id: 'clean-code', title: 'Clean Code'};

      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course
      };

      const action = courseActions.createCoursesSuccess(course);

      expect(action).toEqual(expectedAction);

    });

  });

});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe( 'Async Actions', () => {

  afterEach( () => {
    nock.cleanAll(); //clear all calls after each test runs
  });

  it('Should call BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Here is an example to call nock for real HTTP calls
    // nock('http://example.com')
    //   .get('/courses') //url fake response mock
    //   .reply(200, {
    //       body: {
    //         course: [
    //           { id: 1, firstName: 'Spencer', lastName: 'Bigum'}
    //         ]
    //       }
    //     }
    //   );

    //declare actions to expect
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {
        type: types.LOAD_COURSES_SUCCESS,
        body: {
          courses: [
            { id: 'clean-code', title: 'Clean Code'}
          ]
        }
      }
    ];


    //initialize Store
    const store = mockStore({courses: [], expectedActions});

    //dispatch
    store.dispatch(courseActions.loadCourses()).then(()=>{

      //get array of initialized actions within the store dispatch of the current action called
      const actions = store.getActions();

      //test they are the same as we expected
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });

  });
});


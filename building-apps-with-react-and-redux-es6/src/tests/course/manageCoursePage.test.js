// EXAMPLE TEST USING ENZYME
// ****************************

import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import { ManageCoursePage } from '../../components/course/ManageCoursePage';

// TDD - Test driven dev -> Write test, see if it fails, then add the feature
describe('Manage Course Page', () => {
  it('Sets error message when trying to save empty title', () => {

    const props = {
      course: {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
      },
      allAuthors: [],
      actions: {
        saveCourse: () => {
          return Promise.resolve();
        }
      }
    };

    //Mount allows us to have access to child components within the main component
    //must pass empty array of allAuthors for the SelectInput to pass test
    const wrapper = mount(<ManageCoursePage {...props}/>);

    const saveButton = wrapper.find('input').last();

    // check to make sure its a submit input type
    expect(saveButton.prop('type')).toBe('submit');

    // simulate user click
    // added empty saveCourse function to actions in props to get this to pass
    saveButton.simulate('click');

    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
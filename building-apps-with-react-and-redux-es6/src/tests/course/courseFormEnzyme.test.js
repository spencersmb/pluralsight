// EXAMPLE TEST USING ENZYME
// ****************************

import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import CourseForm from '../../components/course/courseForm';

//Create an instance of our module
const setup = (saving = false) => {

  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  //renders out the module in memory DOM
  //only renders one layer deep so no child components are available
  return shallow(<CourseForm {...props} />);
};

describe('CourseForm via Enzyme', () => {

  it('Renders form and h1', () => {

    const wrapper = setup();

    //check that the first element is a form element
    expect(wrapper.find('form').length).toBe(1);

    //reference example to children elements
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('Save button is labeled "Save" when not saving', () => {

    const wrapper = setup();
    expect(wrapper.find('input').props().value).toBe('Save');

  });

  it('Save button is labeled "Saving" when saving', () => {

    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');

  });

});
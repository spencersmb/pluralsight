// EXAMPLE TEST USING TESTUTILS
// ****************************
import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../../components/course/courseForm';

//Create an instance of our module
const setup = (saving) => {

  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return{
    props,
    output,
    renderer
  };
};

describe('CourseForm via React Test Utils', () => {

  it('Renders form and h1', () => {

    //first get output from the test form using es6 destructering
    const { output } = setup();

    //check that the first element is a form element in the HTML structure
    expect(output.type).toBe('form');

    //reference example to children elements
    //destructure an array - the html children are returned as an array so thats why we use array.
    let [ h1 ] = output.props.children;

    expect(h1.type).toBe('h1');
  });

  it('Save button is labeled "Save" when not saving', () => {

    const { output } = setup(false);
    const submitButton = output.props.children[5];

    expect(submitButton.props.value).toBe('Save');

  });

  it('Save button is labeled "Saving" when saving', () => {

    const { output } = setup(true);
    const submitButton = output.props.children[5];

    expect(submitButton.props.value).toBe('Saving...');

  });

});
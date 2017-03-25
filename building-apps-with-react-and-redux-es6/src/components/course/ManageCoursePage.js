import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as courseActions from 'courseActions'; // testing doesn't like this url path for some reason
import * as courseActions from '../../actions/courseActions';
import CourseForm from '../course/courseForm.js';
import toastr from 'toastr';
import {authorsFormattedForDropdown} from '../../helpers/selectors';


export class ManageCoursePage extends React.Component {

  constructor( props, context ) {
    super(props, context);


    //Set initial inner state to change content without yet saving it to the MAster Store
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };
    this.updateCoursesState = this.updateCoursesState.bind(this);
    this.saveCoursesState = this.saveCoursesState.bind(this);
  }

  //update state on this component when the ajax request completes so the form doesnt stay blank
  componentWillReceiveProps(nextProps){

    //make sure and check that it has changed before setting new state - so that it only changes on the first load
    if(this.props.course.id != nextProps.course.id){
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }

  }

  updateCoursesState(event){

    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;

    return this.setState({
      course: course
    });

  }

  courseFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if(this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  saveCoursesState(event){
    event.preventDefault();

    //new prop added when making a TDD test for errors
    if( !this.courseFormIsValid() ){
      return;
    }

    //not totally sure why he didnt use the ajaxACtion/reducer to do this
    //however local state works
    this.setState({saving: true});

    //this is a promise function
    this.props.actions.saveCourse(this.state.course)
      .then( () => this.redirect())
      .catch( error => {
        //send error to user
        toastr.error(error);
        
        //update local state
        this.setState({saving: false});
        
        //update ajax call state in Redux
        //in the error portion of save course in course Actions - the ajaxError action is dispatched to reset our ajax Redux State
      });
  }


  redirect(){
    this.setState({saving: false});

    //toaster
    toastr.success('Course saved');

    //after save - change pages
    this.context.router.push('/courses');
  }

  render() {
    //use this if you want it to be instant on load to change content of dropdown
    //otherwise select wont update properly
    let {allAuthors} = this.props;
    // console.log(ajaxCallsInProgress);

    return (
       <CourseForm
         course={this.state.course}
         errors={this.state.errors}
         allAuthors={allAuthors}
         saving={this.state.saving}
         onChange={this.updateCoursesState}
         onSave={this.saveCoursesState}
       />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  errors: PropTypes.object
};

//Pull in the React Router context so router is available on this.context.router
//must be place after the Class has been defined
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById( courses, courseId ) {
  if(courses.length > 0){
    return courses.filter( course => course.id === courseId )[0];
  }

}

// pass on which props we want on this component
// ownProps are props already on the component we want to use
// access the url id via ownprops passed from react-router
const mapStateToProps = ( state, ownProps ) => {

  const courseId = ownProps.params.id; //from path /course/:id -> id is the prop

  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  if( courseId && state.courses.length > 0) {
    course = getCourseById( state.courses, courseId );
  }

  return {
    course: course,
    allAuthors: authorsFormattedForDropdown(state.authors),
    errors: {}
  };
};

// this param is optional
// determins what actions are available to us in this component
const mapDispatchToProps = ( dispatch ) => {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
/* eslint-disable react/prop-types */
//disable due to weird dispatch error/warning in es-lint
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as courseActions from 'courseActions';

//components
import CourseList from './courseList';

class CoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {
        title: ''
      }
    };
    
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course});
  }

  onClickSave(){
    //Changed from
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    //changed to using maptodispatch
    // this.props.createCourse(this.state.course);
    //changed to this
    this.props.actions.createCourse(this.state.course);

    //reset form
    this.setState({
      course:{
        title: ''
      }
    });
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    
    return (
      <div>
        <h1>Courses</h1>

        <CourseList courses={courses}/>

        <hr/>

        <input
          type="submit"
          value="Add New Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />

      </div>
    );
  }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

// pass on which props we want on this component
// ownProps are props already on the component we want to use
const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

// this param is optional
// determins what actions are available to us in this component
const mapDispatchToProps = (dispatch) => {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);


import React, {PropTypes} from 'react';
import CourseListRow from './courseListRow';

//These are prop types set on the item when you use it -> {courses, deleteCourse}
const CourseList = ({courses, deleteCourse}) => {

  return(
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
      {
        courses.map( course => <CourseListRow key={course.id} course={course}/> )
      }
      </tbody>
    </table>

  );

};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func
};

export default CourseList;

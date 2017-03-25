import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'App';
import HomePage from 'Home';
import AboutPage from 'About';
import CoursePage from 'Courses';
import ManageCourses from 'ManageCourses';

// each item is passed in as a child by react routing to App.
export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="courses" component={CoursePage}/>
    <Route path="course" component={ManageCourses}/>
    <Route path="course/:id" component={ManageCourses}/>
  </Route>
);
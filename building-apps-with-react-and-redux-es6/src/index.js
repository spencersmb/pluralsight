/* eslint-disable no-console */

import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'Routes';
import {loadCourses} from 'courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import {config} from './store/config.store';

const store = config(); //pass optional initialstate object here into config - like if it comes from a server or something

//make call to populate redux with initial data
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
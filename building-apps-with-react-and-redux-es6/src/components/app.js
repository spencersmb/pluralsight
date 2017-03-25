// This component handles the APP template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/header';


//getLoading status and pass it down
import {connect} from 'react-redux';

//export app to get accessed from webpack config alias
export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

// React router will be passing child components as properties to the app component
// They will be composed on the page under the header
// added children as a required prop type on this component
App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps( state, ownProps ) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);

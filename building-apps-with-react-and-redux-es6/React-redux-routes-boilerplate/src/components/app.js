// This component handles the APP template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/header';

//export app to get accessed from webpack config alias
export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

// React router will be passing child components as properties to the app component
// They will be composed on the page under the header
// added children as a required prop type on this component
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

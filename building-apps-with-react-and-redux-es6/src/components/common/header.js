import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Loading from './loading';

// example of stateless component
// destructure loading, if loading is greater than 0, show loading bar

const Header = ({loading}) => {

  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      
      {loading && <Loading interval={100} dots={20}/>}
    </nav>
  );

};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
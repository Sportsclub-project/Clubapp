import React from 'react';
import {NavLink} from 'reactstrap';
import {logout} from '../../actions/authActions';
import { connect } from 'react-redux';


export const Logout = ({ logout }) => {
    return (
      <>
        <NavLink onClick={logout} href="#">
          Logout
        </NavLink>
      </>
    );
  };
  
  export default connect(null, { logout })(Logout);
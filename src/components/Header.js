import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
      <Link to="/dashboard">
        <h1>Expensify</h1>
      </Link>
      <button onClick={startLogout}>Logout</button>
      {/* <NavLink to="/help" activeClassName="is-active">Help</NavLink> */}
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () =>dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
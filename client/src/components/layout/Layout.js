import React from 'react';
import Navbar from '/Users/stephenmcnally/hidden_navbar2/client/src/components/Navbar/Navbar.js';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;

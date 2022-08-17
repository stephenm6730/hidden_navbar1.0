import React from 'react';
import NewNavbar from '../Navbar/NewNavbar.js';
import classes from './Layout.module.css';

function NewLayout(props) {
  return (
    <div>
      <NewNavbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default NewLayout;
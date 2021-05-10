import React from 'react';
import classes from './Layout.module.css';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/SideBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />

      <div className={classes.container}>
        <Sidebar />
        <div className={classes['todo-list__container']}> {children}</div>
      </div>
    </div>
  );
};

export default Layout;

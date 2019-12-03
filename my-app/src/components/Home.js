import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import HomeLayout from './HomeLayout';
import { getState, setState } from "statezero";
import BaseReactComponent from './BaseReactComponent';

/* Component for the Home page */ 
class Home extends BaseReactComponent {
  filterState({ currentUser, itemList }) {
    return { currentUser, itemList };
  }
    render() {
      console.log(getState("itemList"));
          return (
            <div>
            <AppNavbar />
            <HomeLayout />
            </div>)
            
    }
}

export default Home;

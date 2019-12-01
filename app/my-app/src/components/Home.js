import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import HomeLayout from './HomeLayout';

/* Component for the Home page */ 
class Home extends React.Component {
    render() {
          return (
            <div>
            <AppNavbar />
            </div>)
            
    }
}

export default Home;

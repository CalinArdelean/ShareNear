import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import ComplexGrid from './HomeLayoutFiltered';

// var loggedIn = false;
let loggedIn = 0;

/* Component for the Home page */ 
class HomeFiltered extends React.Component {

    renderNavbar() {
        /*if (typeof (this.props.location) !== 'undefined') {
            if (typeof (this.props.location.isValidUser) !== 'undefined') {
                loggedIn = this.props.location.isValidUser;
            }
        }*/
        if (loggedIn) {
            return (<AppNavbarLoggedIn />);
        }
        else {
            return (<AppNavbar />);
        }
    }

  render()  {
        return (
            <div className="App">
                {this.renderNavbar()}
                <ComplexGrid
                    isValidUser={loggedIn}
            />
            
        </div> 
          )
      }
     
    
}

export default HomeFiltered;

import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import ComplexGrid from './HomeLayoutFiltered';

// var loggedIn = false;


/* Component for the Home page */ 
class HomeFiltered extends React.Component {
  render()  {
          return (
            <div className="App">
            <AppNavbar 
                // currentUser={this.props.currentUser}
            />
            <ComplexGrid 
            //   location={this.props.data}
            />
            
        </div> 
          )
      }
     
    
}

export default HomeFiltered;

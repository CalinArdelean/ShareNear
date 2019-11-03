import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import ComplexGrid from './HomeLayout';

// var loggedIn = false;


/* Component for the Home page */ 
class Home extends React.Component {
  render()  {
      if(this.props.validUser === 1){
          return (
            <div className="App">
            <AppNavbarLoggedIn 
                currentUser={this.props.currentUser}
            />
            <ComplexGrid />
            
        </div> 
          )
      }
      else {
	  return (
        <div className="App">
            <AppNavbar />
            <ComplexGrid />
            
        </div>     
        
        );
      }
    }
}

export default Home;

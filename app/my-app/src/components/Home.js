import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import HomeLayout from './HomeLayout';

// var loggedIn = false;


/* Component for the Home page */ 
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/home");
    }
    render() {
        const { history } = this.props;
        let isValid = 0;
        if (typeof (this.props.location) !== 'undefined') {
            console.log("Location: " + this.props.location.validUser);
            if (this.props.location.validUser === 1) {
                isValid = 1;
            }
        }
      if(this.props.validUser === 1 || isValid){
          return (
            <div className="App">
            <AppNavbarLoggedIn 
                currentUser={this.props.currentUser}
                admin={this.props.admin}
            />
                  <HomeLayout
                      currentUser={this.props.validUser || this.props.location.validUser}

                  />
            
        </div> 
          )
      }
      else {
	  return (
        <div className="App">
            <AppNavbar />
            <HomeLayout />
            
        </div>     
        
        );
      }
    }
}

export default Home;

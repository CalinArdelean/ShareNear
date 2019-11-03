import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import ComplexGrid from './HomeLayout';

// var loggedIn = false;


/* Component for the Home page */
class UserItems extends React.Component {
    render() {
        this.props.location.state = this.props.location.data;
        console.log(this.props.location.state);
        const item = this.props.location.state;
            return (
                <div className="App">
                    <AppNavbarLoggedIn
                    />
                    <br></br>
                    <h3>Your Listings:</h3>
                    <br></br>
                    
                    <p>Item: {item.name}</p>
                </div>
            )
    }
}

export default UserItems;

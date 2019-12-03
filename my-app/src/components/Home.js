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

  constructor() {
    super();
    this.state = {
      users: []
    };
  }
    render() {
      const url = '/users';

      // Since this is a GET request, simply call fetch on the URL
      fetch(url)
        .then((res) => {
          if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json()
          } else {
            alert('Could not get users')
          }
        })
        .then((json) => {  // the resolved promise with the JSON body
          this.setState({ users: json.users });
        }).catch((error) => {
          console.log(error)
        });

          return (
            <div>
            <AppNavbar />
            <HomeLayout />
            </div>)
            
    }
}

export default Home;

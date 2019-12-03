import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
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

    getItems = () => {
      //console.log(getState("itemList"));
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
          let allUsers = json.users
          const items = []
            for (let i = 0; i < allUsers.length; i++) {
            for (let j = 0; j < allUsers[i].itemlist.length; j++) {
              items.push(allUsers[i].itemlist[j])
            }
          }
          console.log(items);
          setState("itemList", items);
          const self = this;
          self.setState({data: items});
        }).catch((error) => {
          console.log(error)
        });

    }

    render() {
      this.getItems()
          return (
            <div>
            <AppNavbar />
              {this.state && this.state.data &&
                <div><HomeLayout/></div>
              }
            </div>
            )
            
    }
}

export default Home;

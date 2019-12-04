import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import ComplexGrid from './HomeLayoutFiltered';
import { getState, setState } from "statezero";

// var loggedIn = false;
let loggedIn = 0;

/* Component for the Home page */ 
class HomeFiltered extends React.Component {

	getItems = () => {
	  const items = []
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

		  
          //const items = []
            for (let i = 0; i < allUsers.length; i++) {
            for (let j = 0; j < allUsers[i].itemlist.length; j++) {
				if((allUsers[i].itemlist[j]).isAvailable){
					items.push(allUsers[i].itemlist[j])
				}
            }
          }
          console.log(items);
          setState("itemList", items);
		  console.log(getState('itemList'))
          
        }).catch((error) => {
          console.log(error)
        });
		return items;
    }


    renderNavbar() {
       
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

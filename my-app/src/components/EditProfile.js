import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import { Link } from 'react-router-dom';
import { getState, setState } from "statezero";
import BaseReactComponent from './BaseReactComponent'
import TextField from "@material-ui/core/TextField";
import { updateEditForm } from './LoginPage';
const bcrypt = require('bcryptjs')

/* Component for a user to create a post and put an item up for rent */
class editProfile extends BaseReactComponent {


	filterState({ currentUser,  currentView }){
        return { currentUser, currentView };
    }

	

	patchUser = () => {
		//let reqString = ;
		console.log(getState('currentUser'));
		console.log(getState('editForm'));
		const request = new Request(`/users/${getState('currentUser')._id}`, {
		
			method: "put",
			body: JSON.stringify({
				firstname: getState('editForm').firstname,
				lastname: getState('editForm').lastname,
				phonenumber: getState("editForm").phonenumber,
                location: getState("editForm").location,
                description: getState("editForm").description,
          
				}),
			headers: {
			accept: "application/json, text/plain, /",
			"content-type": "application/json"
			}
		});
		
		//send the request with fetch()
		fetch(request)
		.then(res => {
		if (res.status === 200) {
				console.log("yoo we did it edit profile");
				//setState("currentView", "Home")
			return res.json();
		}
		})
		.catch(error => {
		console.log("we have failed");
		console.log(error);
		});
		



		const url = '/users';
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

			  const inputId = getState("currentUser")._id
			  console.log(allUsers)
			  for(let i = 0; i < allUsers.length; i++){
				console.log(inputId);
				console.log(allUsers[i]._id);
				if(inputId === allUsers[i]._id){
				   setState("currentUser", allUsers[i])
				   setState("currentView", "UserProfile")
				   console.log(getState('currentUser'));
				}
			  }
      }).catch((error) => {
          console.log(error)
      });
	}


    render() {
        return (
            <div className="Edit">
                <AppNavbar/>

                <div id="sc-edprofile">
                    <h1>Let's Edit your Profile!</h1>
                    <div class="sc-container">
					
                       <input type="text" placeholder="First Name" onChange={e => updateEditForm(e.target)} name="firstname" label="First Name"/>
                        <input type="text" placeholder="Last Name" onChange={e => updateEditForm(e.target)} name="lastname"
                        label="Last Name"
                        />
                        
                        <input type="text" placeholder="Phone Number" onChange={e => updateEditForm(e.target)} name="phonenumber"
                        label="Phone Number"
                        />
                        
                        <input type="text" placeholder="Location" onChange={e => updateEditForm(e.target)} name="location"
                        label="Location"
                        />
                        <textarea placeholder="User Description" onChange={e => updateEditForm(e.target)} name="description"
                        label="User Description"
                        />
                    <select>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Other</option>
                    </select>
                    
                        
						<button type="button" onClick={ this.patchUser }>Save</button>
                        
                </div>
            </div>


            </div>

        );
    }
}

export default editProfile;
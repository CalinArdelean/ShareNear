import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import { getState, setState } from "statezero";
import _ from 'lodash';
const bcrypt = require('bcryptjs')

/* Component for an admin to view the list of users (currently hardcoded, but will need to read from a database) */

const updateModifyForm = field => {
    const { name, value } = field;
    setState(`modifyForm.${name}`, value);
};

const updateDeleteForm = field => {
    const { name, value } = field;
    setState(`deleteForm.${name}`, value);
};


class ModifyUser extends React.Component {

    constructor() {
        super();
        this.state = {
            modified_user: "",
            deletion_user: ""
        };
    }

    modifyPassword = () => {
        console.log("checking user") 
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
          const inputUsername = getState("modifyForm").username
          console.log(allUsers)
          
        for(let i = 0; i < allUsers.length; i++){
            if(inputUsername === allUsers[i].username){
                console.log(allUsers[i]._id)
                this.setState({modified_user: allUsers[i]});
            }
        }

        bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(getState("modifyForm").password, salt, (err, hash) => {
                console.log(this.state.modified_user.password)
                this.state.modified_user.password = hash;
                
                const request = new Request(`/users/${this.state.modified_user._id}`, {
		
                    method: "put",
                    body: JSON.stringify({
                        firstname: this.state.modified_user.firstname,
                        lastname: this.state.modified_user.lastname,
                        phonenumber: this.state.modified_user.phonenumber,
                        location: this.state.modified_user.location,
                        email: this.state.modified_user.email,
                        description: this.state.modified_user.description,
                        password: this.state.modified_user.password,
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
                    return res.json();
                }
                })
                .catch(error => {
                console.log("we have failed");
                console.log(error);
                });
			})
		})
            
      }).catch((error) => {
          console.log(error)
      });
    }


    deleteUser = () => {
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
          const inputUsername = getState("deleteForm").username
          console.log(allUsers)
          
        for(let i = 0; i < allUsers.length; i++){
            if(inputUsername === allUsers[i].username){
                console.log(allUsers[i]._id)
                this.setState({deletion_user: allUsers[i]});
            }
        }
        console.log(this.state.deletion_user._id)
        const request = new Request(`/users/${this.state.deletion_user._id}`, {
		
            method: "delete",
            // headers: {
            // accept: "application/json, text/plain, /",
            // "content-type": "application/json"
            // }
        });
        
        //send the request with fetch()
        fetch(request)
        .then(res => {
        if (res.status === 200) {
            return res.json();
        }
        })
        .catch(error => {
        console.log("we have failed");
        console.log(error);
        });
            
      }).catch((error) => {
          console.log(error)
      });
    }


    render() {

        return (
            // {this.loadUsers}
            <div>            
                <Navbar />
                <hr></hr>
                <div id="sc-edprofile">
                        <h1>Modify a User Password</h1>
                        <div class="sc-container">
                            <input type="text" name="username" onChange={e => updateModifyForm(e.target)} placeholder="Enter a Username" />
                            <input type="text" name="password" onChange={e => updateModifyForm(e.target)} placeholder="New Password" />
                            <button type="button" onClick={ this.modifyPassword }>Save</button>
                        </div>
                        
                </div>

                <div id="sc-edprofile">
                        <h1>Delete a User</h1>
                        <div class="sc-container">
                            <input type="text" name="username" onChange={e => updateDeleteForm(e.target)} placeholder="Enter a Username" />
                            <button type="button" onClick={ this.deleteUser }>Delete User</button>
                        </div>
                        
                </div>

            </div>
        );
    }
}

export default ModifyUser;
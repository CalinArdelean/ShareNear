import React, { useState } from "react";

// Importing components
import LoginForm from './LoginForm';
import { getState, setState } from "statezero";
import BaseReactComponent from './BaseReactComponent';

const bcrypt = require('bcryptjs')


export const updateLoginForm = field => {
    const { name, value } = field;
    setState(`loginForm.${name}`, value);
};

export const updateSignupForm = field => {
    const { name, value } = field;
    setState(`signupForm.${name}`, value);
};


//component for the login page
class LoginPage extends BaseReactComponent {
  filterState({ currentUser }){
    return { currentUser };
}

  // Function to check if user is valid.  
  // Does not need parameters since it only uses and changes the state.
  checkUser = () => {
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
      const inputEmail = getState("loginForm").email
      const inputPassword = getState("loginForm").password

      for(let i = 0; i < allUsers.length; i++){
        if(inputEmail === allUsers[i].email){
          bcrypt.compare(inputPassword, allUsers[i].password, (err, res) => { 
            if(res){
              setState("currentUser", allUsers[i])
              }
            else {
              console.log("Wrong email or password.");
            }
            }
           )
        }
        
      }
      
  }).catch((error) => {
      console.log(error)
  })

  }

  render() {
    return (

      <div className="App">
         
        <LoginForm 
              checkUser={ this.checkUser } 
       />
       
      </div>
    );
  }
}
export default LoginPage;

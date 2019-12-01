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
  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  // state = {
  //   admin: 0,
  //   userName: "",
  //   userPassword: "",
  //   currentUser: {},
  //   validUser: -1,
  //   //hard coded values that will have to be read from a database
  //   users: [
  //     {id: 0, user: "user", pass: "user", fName: "John", lName: "Doe", num: "416-900-8555",
  //      email: "JohnDoe123@hotmail.com", location: "Toronto, ON" },
  //     { id: 1, user: "admin", pass: "admin", fName: "Mary", lName: "Smith", num: "647-880-3325",
  //      email: "MarySmithers@hotmail.com", location: "Oakville, ON"}
  //   ]
  // }

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
      console.log(allUsers)
  
      // const dbPassword = allUsers[3].password
      // bcrypt.compare(inputPassword, dbPassword, (err, res) => {  console.log('Bcripy result:', res);})
      



      let validEmail = false
      let validPassword = false
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
    console.log(this.state.validUser)
    // user = this.state.currentUser;
    return (

      <div className="App">
         
        <LoginForm 
              // admin={ this.state.admin }
              // userName={ this.state.userName }
              // userPassword={ this.state.userPassword }
              // currentUser={ this.state.currentUser }
              // validUser={ this.state.validUser }
              // handleChange={ this.handleInputChange } 
              checkUser={ this.checkUser } 
       />
       
      </div>
    );
  }
}
export default LoginPage;

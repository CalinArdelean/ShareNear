import React, { useState } from "react";

// Importing components
import LoginForm from './LoginForm';
import { getState, setState } from "statezero";
const bcrypt = require('bcryptjs')


export const updateLoginForm = field => {
    const { name, value } = field;
    setState(`loginForm.${name}`, value);
};
<<<<<<< HEAD
var user = {};
=======

export const updateSignupForm = field => {
    const { name, value } = field;
    setState(`signupForm.${name}`, value);
};

>>>>>>> b7121765a2608cb1d0c182fd08e9be38edec1af5
//component for the login page
class LoginPage extends React.Component {
  
  ///  React 'state'.  
  // Allows us to keep track of changing data in this component.
  state = {
    admin: 0,
    userName: "",
    userPassword: "",
    currentUser: {},
    validUser: -1,
    //hard coded values that will have to be read from a database
    users: [
      {id: 0, user: "user", pass: "user", fName: "John", lName: "Doe", num: "416-900-8555",
       email: "JohnDoe123@hotmail.com", location: "Toronto, ON" },
      { id: 1, user: "admin", pass: "admin", fName: "Mary", lName: "Smith", num: "647-880-3325",
       email: "MarySmithers@hotmail.com", location: "Oakville, ON"}
    ]
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
      // console.log(json.users)
      let allUsers = json.users
      const inputEmail = JSON.stringify(getState("loginForm").email)
      const inputPassword = JSON.stringify(getState("loginForm").password)
      // let hashedPassword
      // bcrypt.genSalt(10, (err, salt) => {
      //   bcrypt.hash(inputPassword, salt, (err, hash) => {
      //     console.log(hash)
      //     hashedPassword = hash
      //     console.log(JSON.stringify(hashedPassword))
      //   }) 
      // })
      // console.log(JSON.stringify(hashedPassword) === JSON.stringify(allUsers[3].password))
      console.log(inputPassword)
      // console.log(JSON.stringify(allUsers[3].password))
      const dbPassword = JSON.stringify(allUsers[3].password)
      console.log(dbPassword)
      bcrypt.compare(inputPassword, dbPassword, (err, res) => {  console.log(inputPassword, dbPassword,'Bcripy result:', res);})
      // bcrypt.compare("12345678!", "$2a$10$jnVglJC0Lg08N83sd2KfGOOuiElPNDwcmwVjgx4JCGr.fpybJXRda", (err, res) => {  console.log('Bcripy result:', res);})

      // const filteredUsers = allUsers.filter((user) => user.email === inputEmail && user.password === inputPassword )
      // if(filteredUsers.length === 0){
      //   this.validUser === 0
      //   console.log("Valid User")
      // }
      // else{
      //   this.validUser === 1
      //   console.log("Invalid User")
      // }
  }).catch((error) => {
      console.log(error)
  })

  }

  render() {
    console.log(this.state.validUser)
    user = this.state.currentUser;
    return (

      <div className="App">
         
        <LoginForm 
              admin={ this.state.admin }
              userName={ this.state.userName }
              userPassword={ this.state.userPassword }
              currentUser={ this.state.currentUser }
              validUser={ this.state.validUser }
              handleChange={ this.handleInputChange } 
              checkUser={ this.checkUser } 
       />
       
      </div>
    );
  }
}
export default LoginPage;

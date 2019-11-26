import React from 'react';

// Importing components
import LoginForm from './LoginForm';
import { bool } from 'prop-types';

var user = {};

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
  // Generic handler for whenever we type in an input box.
  // We change the state for the particular property bound to the textbox from the event.
  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    
    this.setState({
      [name]: value  
    })

  }

  // Function to check if user is valid.  
  // Does not need parameters since it only uses and changes the state.
  checkUser = () => {
    console.log("checking user")

      const userList = this.state.users
      const username = this.state.userName
      const pass = this.state.userPassword
      let valid = 0
      let id = -1
      let usernum = 0;

      for(let i = 0; i < userList.length; i++){
          if(userList[i].user === username && userList[i].pass === pass){
            valid = 1;
            id = i;
            if (i === 1) {
                usernum = 1;
            }
          }
      }
      console.log(valid)
      user = this.state.users[id];
      console.log(user);
      console.log(usernum)
      this.setState({
        validUser: valid,
        currentUser: user,
        admin: usernum
      });
      
      
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

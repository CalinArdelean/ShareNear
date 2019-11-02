/*  Full Queue component */
// Everything here was previously in the App component.
import React from 'react';

// Importing components
import LoginForm from './LoginForm';

class LoginPage extends React.Component {

  ///  React 'state'.  
  // Allows us to keep track of chagning data in this component.
  state = {
    userName: "",
    userPassword: "",
    validUser: false,
    users: [
      {user: "user", pass: "user"},
      {user: "admin", pass: "admin"}
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

      for(let i = 0; i < userList.length; i++){
          if(userList[i].user === username && userList[i].pass === pass){
              console.log("valid user")
          }

      }
  }

  render() {
    return (
        

      <div className="App">
        
        <LoginForm 
              userName={ this.state.userName }
              userPassword={ this.state.userPassword }
              validUser={ this.state.validUser }
              handleChange={ this.handleInputChange } 
              checkUser={ this.checkUser } 
       />
      </div>
    );
  }
}

export default LoginPage;

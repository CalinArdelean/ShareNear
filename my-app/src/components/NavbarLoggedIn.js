import React from 'react'
import '../App.css';
import logo from '../logo.svg';
import { Navbar, Nav, Form, FormControl, Container, Row, Col} from 'react-bootstrap';
import Profile from './UserProfile';
import { Link } from 'react-router-dom';

//component for the navbar once the user has logged in
class AppNavbarLoggedIn extends React.Component {

  state = {
    clickedProfile: 0
  }

  clickedProfile = () => {
    this.setState({
      clickedProfile: 1
    });
  }

    render() {
        
        console.log("PROP CURRENT USER: " + this.props.location);
    // if(this.state.clickedProfile === 1){
    //   return (

    //     <div className="App">
    //       <Profile 
    //         currentUser={this.props.currentUser}
    //         />r
    //     </div>
    //   );
    // }
    // else {
      return (
          <Navbar variant="dark" className="App-navbar">
              <Navbar.Brand>
                  
                  <Link
                      to={{
                          pathname: "./",
                          validUser: 1
                      }}>
                      <img
                          alt=""
                          src={logo}
                          width="75px"
                          // height="5px"
                          className="d-inline-block align-top"
                      />
                  </Link>
                </Navbar.Brand>
            <Form inline className="text-white">
              <FormControl type="text" placeholder="Item" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
              <FormControl type="text" placeholder="Location" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
              &nbsp; &nbsp; &nbsp; &nbsp;
              

                <Link
                    to={{
                          pathname: "./HomeFiltered",
                          isValidUser: 1
                    }}><i className="fas fa-search"></i>
                </Link>
            
            
            </Form>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="text-white">
                        <Link
                          to={{
                              pathname: "./userlist",
                              isValidUser: 1
                          }}>View User List
                      </Link>
                    &nbsp; &nbsp; &nbsp;

                      <Link
                          to={{
                              pathname: "./profile",
                              isValidUser: 1
                          }}>View Profile
                      </Link>
                {/* <button onClick={this.clickedProfile}> View Profile </button> */}
                    &nbsp; &nbsp; &nbsp;
                <a href="./">Logout
                    &nbsp; <i className="fas fa-user"></i>
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>      
      );
    //}
  }
}

export default AppNavbarLoggedIn;
import React from 'react'
import '../App.css';
import logo from '../logo.svg';
import { Navbar, Nav, Form, FormControl, Container, Row, Col} from 'react-bootstrap';

class AppNavbar extends React.Component {
  render() {
    return (
        <Navbar variant="dark" className="App-navbar">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="75px"
              // height="5px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Form inline className="text-white">
            <FormControl type="text" placeholder="Item" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
            <FormControl type="text" placeholder="Location" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="/">
            <i className="fas fa-search"></i>
            </a>
          </Form>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              <a href="./login">Login
              &nbsp; <i className="fas fa-user"></i>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>      
    );
  }
}

export default AppNavbar;
import React from 'react'
import logo from './../assets/logo.svg';
import { Navbar, Nav, Form, FormControl, Container, Row, Col} from 'react-bootstrap';

function AppNavbar() {
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
          {/* <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" />  </Navbar.Brand> */}
          <Form inline className="text-white">
            <FormControl type="text" placeholder="Item" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
            <FormControl type="text" placeholder="Location" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
            <FormControl type="date" placeholder="Receive Date" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
            <FormControl type="date" placeholder="Return Date" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <i class="fas fa-search"></i>
          </Form>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              <a>View Profile
              &nbsp; <i class="fas fa-user"></i>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>      
    );
}

export default Navbar;
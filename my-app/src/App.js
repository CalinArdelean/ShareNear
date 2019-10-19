import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import { Navbar, Nav, Form, FormControl, Container, Row, Col} from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Container>
        <Row>
          <Col>  
            <Navbar bg="dark" variant="dark" className="App-navbar">
              <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" />  </Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#profile">View Profile</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
          </Col>
        </Row>
      </Container>


      


            
      </header>
    </div>
  );
}



export default App;

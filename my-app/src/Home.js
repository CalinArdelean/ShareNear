import React from 'react';
import './Home.css';

import AppNavbar from './components/Navbar';
import ComplexGrid from './components/HomeLayout';

/* Component for the Home page */ 
class Home extends React.Component {
  render()  {
	  return (
        <div className="App">
            <AppNavbar />
            <ComplexGrid />
        </div>           
	    );
	}
}

export default Home;

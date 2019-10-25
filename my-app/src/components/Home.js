import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import ComplexGrid from './HomeLayout';

/* Component for the Home page */ 
class Home extends React.Component {
  render()  {
	  return (
        <div className="App">
            <AppNavbar />
            <div className='Right'>
            <a href='./Profile'>View Profile</a>
            </div>
            <ComplexGrid />
        </div>           
	    );
	}
}

export default Home;

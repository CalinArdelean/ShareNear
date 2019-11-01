import React from 'react';
// import './Forms.css';
import placeholder from '../assets/chainsaw.jpg';

/* Component to Login */

class ItemPage extends React.Component {
    render() {
        return (
            <div className="Form" height="100px">
                <br></br>
                <br></br>
                <img
                    alt=""
                    src={placeholder}
                    width="175px"
                    height="100px"
                    className="d-inline-block align-top" />
                
                

            </div>

        );
    }
}

export default ItemPage;
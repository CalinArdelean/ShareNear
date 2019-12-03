import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

/* Component for an admin to view the list of users (currently hardcoded, but will need to read from a database) */
class ModifyUser extends React.Component {

    render() {

        return (
            // {this.loadUsers}
            <div>            
                <Navbar />
            
                <div id="sc-edprofile">
                        <h1>Modify a User Password</h1>
                        <div class="sc-container">
                            <input type="text" placeholder="Enter a Username" />
                            <input type="text" placeholder="New Password" />
                            <button type="button">Save</button>
                        </div>
                        
                </div>

            </div>
        );
    }
}

export default ModifyUser;
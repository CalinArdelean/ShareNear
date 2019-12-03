import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

/* Component for an admin to view the list of users (currently hardcoded, but will need to read from a database) */
class userList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    render() {
        const url = '/users';
    
      // Since this is a GET request, simply call fetch on the URL
      fetch(url)
      .then((res) => { 
          if (res.status === 200) {
              // return a promise that resolves with the JSON body
             return res.json() 
         } else {
              alert('Could not get users')
         }                
      })
      .then((json) => {  // the resolved promise with the JSON body
          this.setState({users: json.users});
      }).catch((error) => {
          console.log(error)
      });

        return (
            // {this.loadUsers}
            <div className="UserList">
                <Navbar />
                
                <BootstrapTable
                    data={this.state.users}
                    search={true}
                    pagination
                    striped
                    hover
                    condensed
                >
                    <TableHeaderColumn dataField="username" isKey dataAlign="center">Username</TableHeaderColumn>
                    <TableHeaderColumn dataField="firstname" dataAlign="center">First Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="lastname" dataAlign="center">Last Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="email" dataAlign="center">Email</TableHeaderColumn>
                    <TableHeaderColumn dataField="usertype" dataAlign="center">Admin?</TableHeaderColumn>
                </BootstrapTable>
            </div>

        );
    }
}

export default userList;
import React from 'react';
import '../App.css';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import { Table } from 'react-bootstrap';

/* Component for a user to create a post and put an item up for rent */
class userList extends React.Component {
    render() {
        return (
            <div className="Edit">
                <AppNavbarLoggedIn />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>@JohnDoe123@hotmail.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mary</td>
                            <td>Smith</td>
                            <td>MarySmithers@hotmail.com</td>
                        </tr>
                    </tbody>
                </Table>


            </div>

        );
    }
}

export default userList;
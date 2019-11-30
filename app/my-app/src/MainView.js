/* The Authenticated View (after logging in) */

import React from "react";
// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";

class MainView extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path={["/", "/home"]}
                        render={({ history }) => (
                            <Home history={history} />
                        )}
                    />
                    <Route render={() => <div>ERROR: 404 Not found</div>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default MainView;
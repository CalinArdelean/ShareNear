import set from "lodash-es/set";
import React from 'react'

import { action, setState} from "statezero";
import LoginForm from "../components/LoginForm";

// Initialize all state paths used by your app as empty.
// These are the states that you can filter using filterState()
// as needed by specific components.

export const setEmptyState = () => {
    setState("CurrentUser", null);
    setState("signupForm", { firstname: "", lastname: "", phonenumber: "", email: "", location:"", username: "", password: "", usertype: false})
    setState("loginForm", { email: "", password: "" })
    
    setState("currentView", "Login")

    setState("itemList", []);
    setState("itemForm", {name: "", price:""})
    setState("message", { type: "", body: "" });
};
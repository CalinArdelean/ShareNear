import set from "lodash-es/set";
import React from 'react'

import { action, setState} from "statezero";
import LoginForm from "../components/LoginForm";

// Initialize all state paths used by your app as empty.
// These are the states that you can filter using filterState()
// as needed by specific components.

export const setEmptyState = () => {
    setState("CurrentUser", null);
    setState("signupForm", { firstname: "", lastname: "", phonenumber: "", email: "", location:"", username: "", password: "", usertype: false, description:"Hi! Welcome to my profile", itemlist: []})
    setState("loginForm", { email: "", password: "" })
    setState("postForm", { name: "", description: "", price: "", location: "", duration: "", image: {}})
	setState("editForm", { firstname: "", lastname: "", phonenumber: "", location:"", usertype: false, description:"Hi! Welcome to my profile", itemlist: []})
    setState("currentView", "Login");
    setState("currentItem", null);
    setState("renter", null);
    setState("itemList", null);
	setState("homeFiltered", null);
    setState("message", { type: "", body: "" });
};

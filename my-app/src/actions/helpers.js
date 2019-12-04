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
	setState("editForm", { firstname: "", lastname: "", phonenumber: "", email: "", location:"", username: "", password: "", usertype: false, description:"Hi! Welcome to my profile", itemlist: []})
    setState("currentView", "Login");
    setState("currentItem", null);
    setState("renter", null);
    setState("itemList", null);
        // { name: "Children's Bicycle", 
        // description: "Brand new, my son uses it and he\'s eight, so I can guarantee that it\'s good for eight - year - olds.",
        // price: "$15.00",
        // duration: "per day",
        // location: "Mississauga, ON",
        // isAvailable: true, 
        // renter: "5de60679a68f4449f8582996"},
        // {
        //     name: "Chainsaw",
        //     description: "15-inch petrol chainsaw.",
        //     price: "$11.00",
        //     duration: "per hour",
        //     location: "Toronto, ON",
        //     isAvailable: true,
        //     renter: "5de60679a68f4449f8582996"
        // },
        // {
        //     name: "Snow Blower",
        //     description: "This heavy duty snow blower powered by a 11 HP 120 Volt electric start engine transforms banks of snow into a clear path in a single pass.",
        //     price: "$20.00",
        //     duration: "per day",
        //     location: "Mississauga, ON",
        //     isAvailable: true,
        //     renter: "5de60679a68f4449f8582996"
        // }

    setState("message", { type: "", body: "" });
};

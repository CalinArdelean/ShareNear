import set from "lodash-es/set";
import { action, setState} from "statezero";

// Initialize all state paths used by your app as empty.
// These are the states that you can filter using filterState()
// as needed by specific components.

export const setEmptyState = () => {
    setState("CurrentUser", null);
    setState("loginForm", { email: "", password: "" })

    setState("itemList", []);
    setState("itemForm", {name: "", price:""})
    setState("message", { type: "", body: "" });
};

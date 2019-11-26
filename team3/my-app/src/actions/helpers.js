import set from "lodash-es/set";
import { action } from "statezero";

// Initialize all state paths used by your app as empty.
// These are the states that you can filter using filterState()
// as needed by specific components.

export const setEmptyState = () => {
    setState("CurrentUser", { username: "", password: "" });
    setState("ItemList", []);
    setState("message", { type: "", body: "" });
};

// Helper method to set a state path.
// Usage: setState(STATE_PATH_NAME, STATE_PATH_VALUE);
export const setState = action(({ commit, state }, path, value) => {
    set(state, path, value);
    commit(state);
});
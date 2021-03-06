import { getState, setState } from "statezero";
import { setEmptyState } from "./helpers";

export const readCookie = () => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                setState("currentUser", json.currentUser);
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateLoginForm = field => {
    const { name, value } = field;
    setState(`loginForm.${name}`, value);
};

export const updatePostForm = field => {
    const { name, value } = field;
    setState(`postForm.${name}`, value);
};

export const login = () => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify(getState("loginForm")),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                setState("currentUser", json.currentUser);
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const logout = () => {
    const url = "/users/logout";

    fetch(url)
        .then(res => {
            setEmptyState();
        })
        .catch(error => {
            console.log(error);
        });
};

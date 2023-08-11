import CookieHandler from "./cookieHandler";

const SERVER_URL = "http://localhost:8000";

const APIHandler = {
    login: async function (body) {
        return await fetch(SERVER_URL + "/login", {
            method: "POST",
            body: body,
        }).then((response) => {
            if (!response.ok) {
                if (response.status === 401) console.log("User does not exist.");
                return null;
            } else {
                return response.json();
            }
        });
    },

    register: async function (body) {
        return await fetch(SERVER_URL + "/register", {
            method: "POST",
            body: body,
            redirect: "follow",
        }).then((response) => (!response.ok ? console.log("Error " + response.status) : response.json()));
    },

    get: async function (route) {
        return await fetch(SERVER_URL + route, {
            method: "GET",
            headers: {
                Authorization: "Token " + CookieHandler.get("token"),
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                else return null;
            })
            .catch((error) => console.log("Caught Error: ", error));
    },

    post: async function (route, body) {
        return fetch(SERVER_URL + route, {
            method: "POST",
            body: body,
            headers: {
                Authorization: "Token " + CookieHandler.get("token"),
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                else return null;
            })
            .catch((error) => console.log("Caught Error: ", error));
    },
};

export default APIHandler;

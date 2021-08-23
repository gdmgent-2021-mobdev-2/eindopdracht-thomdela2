import { createHeaders } from "../../utils/api";

const login = (data) => {
    return fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: createHeaders({}),
        body: JSON.stringify(data)
    });
};

export {
    login,
}
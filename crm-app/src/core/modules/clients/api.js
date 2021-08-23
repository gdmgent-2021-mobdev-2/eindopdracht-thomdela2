const { createHeaders } = require("../../utils/api");

const fetchClients = () => (headers) => {

    return fetch(`${process.env.REACT_APP_API_URL}/clients`, {
        headers: createHeaders(headers),
    });
};

const createClient = (data) => (headers) => {
    return fetch(`${process.env.REACT_APP_API_URL}/clients`, {
        method: 'POST',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
}

export {
    fetchClients,
    createClient
};
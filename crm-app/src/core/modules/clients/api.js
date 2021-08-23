import { useHistory } from "react-router-dom";
import { Routes } from "../../routing";

const { createHeaders } = require("../../utils/api");

const fetchClients = () => (headers) => {
    return fetch(`${process.env.REACT_APP_API_URL}/clients`, {
        headers: createHeaders(headers),
    });
};

const fetchClient = (id) => (headers) => {
    return fetch(`${process.env.REACT_APP_API_URL}/clients/${id}`, {
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

const updateClient = (data) => (headers) => {
    const { _id } = data;
    return fetch(`${process.env.REACT_APP_API_URL}/clients/${_id}`, {
        method: 'PATCH',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
}

const deleteClient = (data) => (headers) => {
    const { _id } = data;
    return fetch(`${process.env.REACT_APP_API_URL}/clients/${_id}`, {
        method: 'DELETE',
        headers: createHeaders(headers)
    })
}

export {
    fetchClients,
    createClient,
    updateClient,
    fetchClient,
    deleteClient,
};
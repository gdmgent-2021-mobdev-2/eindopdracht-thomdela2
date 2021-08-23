const { createHeaders } = require("../../utils/api");

const fetchProjects = () => (headers) => {

    return fetch(`${process.env.REACT_APP_API_URL}/projects`, {
        headers: createHeaders(headers),
    });
};

export {
    fetchProjects
}
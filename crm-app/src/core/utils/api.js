import ApiError from "../error/ApiError";
import { createClient } from "../modules/clients/api";

const handleApiResult = async (res) => {
    if(!res.ok) {
        const err = await res.json();
        throw new ApiError(err);
    }
    return res;
}

const createHeaders = ({ token }, extra = {}) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `BEARER ${token}`,
        ...extra
    }
}


export { 
    handleApiResult,
    createHeaders,
};
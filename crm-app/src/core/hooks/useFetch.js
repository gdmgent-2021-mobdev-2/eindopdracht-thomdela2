import { useState, useEffect, useCallback} from 'react';
import { useAuth } from '../../Components/Auth/AuthProvider';

const useFetch = (url) => {
    const {user} = useAuth();

    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetchData = useCallback((isCurrent = true) => {
        fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            headers: {
                'Authorization': `BEARER ${user.token}`,
            }
        })
        .then((res) => {
            if(res.status === 404) {
                throw new Error('Not Found!');
            }
            return res;
        })
        .then((res) => res.json())
        .then((data) => isCurrent && setData(data))
        .catch((err) => isCurrent && setError(String(err)));
    }, [url, user.token])

    const refresh = () => {
        fetchData();
    };

    useEffect(() => {
        setData(null);
        setError(null);

        if (url) {
            fetchData();
        }
    }, [url, fetchData]);

    const isLoading = !data && !error;

    return {
        data,
        error,
        refresh,
        isLoading
    }
}

export default useFetch;
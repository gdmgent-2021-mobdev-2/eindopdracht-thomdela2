import { useState, useEffect, useCallback} from 'react';
import useAuthApi from './useAuthApi';

const useFetch = (apiCall) => {
    const withAuth = useAuthApi();

    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetchData = useCallback((isCurrent = true) => {
        withAuth(apiCall())
        .then((data) => isCurrent && setData(data))
        .catch((err) => isCurrent && setError(err));
    }, [apiCall, withAuth])

    const refresh = () => {
        fetchData();
    };

    useEffect(() => {
        setData(null);
        setError(null);

        if (apiCall) {
            fetchData();
        }
    }, [apiCall, fetchData]);

    const isLoading = !data && !error;

    return {
        data,
        error,
        setData,
        refresh,
        isLoading
    }
}

export default useFetch;
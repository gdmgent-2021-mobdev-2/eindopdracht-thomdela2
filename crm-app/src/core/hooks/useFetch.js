import { useState, useEffect, useCallback} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetchData = useCallback((isCurrent = true) => {
        fetch(url)
        .then((res) => {
            if(res.status === 404) {
                throw new Error('Not Found!');
            }
            return res;
        })
        .then((res) => res.json())
        .then((data) => isCurrent && setData(data))
        .catch((err) => isCurrent && setError(String(err)));
    }, [url])

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
import { useState, useEffect } from 'react';

const useAPICall = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        fetchAPI();
    }, [url]);

    return { loading, data, error };
};

export default useAPICall;
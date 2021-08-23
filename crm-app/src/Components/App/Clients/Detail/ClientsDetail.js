import React from 'react';
import { useParams } from 'react-router-dom';

const ClientsDetail = () => {

    const {id} = useParams();

    return (
        <>
            <h1>Client Detail {id}</h1>
        </>
    )
}

export default ClientsDetail;
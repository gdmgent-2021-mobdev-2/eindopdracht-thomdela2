import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../../core/hooks/useFetch';
import { route, Routes } from '../../../../core/routing';

const ClientsOverview = () => {

    const { data : clients, refresh, error, isLoading } = useFetch('/clients');

    if(isLoading) return "Loading...";
    if(error) return alert(error);

    return (
        <>
            <h1>Clients</h1>
            <button onClick={() => refresh()}>Refresh</button>
            <ul>
                {clients.map((client) => (
                    <li key={client._id}>
                        <Link to={route(Routes.ClientsDetail, {id: client._id} )}>{client.slug}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ClientsOverview;
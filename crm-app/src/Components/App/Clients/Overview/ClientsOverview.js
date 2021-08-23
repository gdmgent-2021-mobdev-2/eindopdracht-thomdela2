import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../../core/hooks/useFetch';
import { fetchClients } from '../../../../core/modules/clients/api';
import { route, Routes } from '../../../../core/routing';

const ClientsOverview = () => {

    const { data : clients, /* refresh, */ error, isLoading } = useFetch(fetchClients);

    if(isLoading) return "Loading...";
    if(error) {
        console.log(error);
        return "Error!"
    };

    return (
        <main>
            <div className="innerMain">
                <h1>Clients</h1>

                {/* <button onClick={() => refresh()}>Refresh</button> */}
                <Link to={Routes.ClientsCreate}>Create client</Link>

                <ul>
                    {clients.map((client) => (
                        <li key={client._id}>
                            <Link to={route(Routes.ClientsDetail, {id: client._id} )}>{client.slug}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default ClientsOverview;
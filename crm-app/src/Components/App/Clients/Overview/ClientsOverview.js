import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../../core/hooks/useFetch';
import { isAdmin } from '../../../../core/modules/auth/utils';
import { fetchClients } from '../../../../core/modules/clients/api';
import { route, Routes } from '../../../../core/routing';
import { useAuth } from '../../../Auth/AuthProvider';

// place to AdminContainer
const AdminContainer = ({children}) => {
    const {user} = useAuth().user;
    const admin = isAdmin(user);

    if (admin) {
        return children;
    }
    return null;
}

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
                <Link className="btn btn-add" to={Routes.ClientsCreate}>Create client</Link>                    

                <ul>
                    {clients.map((client) => (
                        <li key={client._id}>
                            <Link to={route(Routes.ClientsDetail, {id: client._id} )}>{client.email}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default ClientsOverview;
import React from 'react';
import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../core/routing';

const ClientsDetail = ({ client }) => {

    if(client) {
        return (
            <main>
                <div className="innerMain">
                    <h1>{client.email}</h1>
                    <Link to={route(Routes.ClientsEdit, {id: client._id})}>Edit client</Link>
                    <Link to={route(Routes.ClientsDelete, { id: client._id })}>Delete client</Link>
                    <p>{`${client.firstname} ${client.lastname}`}</p>
                </div>
            </main>
        )
    }

}

export default ClientsDetail;
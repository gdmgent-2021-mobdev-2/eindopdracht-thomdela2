import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ClientsOverview from './Overview/ClientsOverview';
import { Routes } from '../../../core/routing';
import CreateClient from './Create/CreateClient';
import ClientDetailContainer from './Detail/ClientDetailContainer';

const Clients = () => {
    return (
        <>
            <Switch>
                <Route path={Routes.ClientsCreate}>
                    <CreateClient />
                </Route>
                <Route path={Routes.ClientsDetail}>
                    <ClientDetailContainer />
                </Route>
                <Route path={Routes.Clients}>
                    <ClientsOverview />
                </Route>
                <Redirect to={Routes.Clients} />
            </Switch>
        </>
    )
}

export default Clients;
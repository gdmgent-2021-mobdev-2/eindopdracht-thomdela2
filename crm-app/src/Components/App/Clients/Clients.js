import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ClientsOverview from './Overview/ClientsOverview';
import { Routes } from '../../../core/routing';
import ClientsDetail from './Detail/ClientsDetail';

const Clients = () => {
    return (
        <>
            <Switch>
                <Route path={Routes.ClientsDetail}>
                    <ClientsDetail />
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
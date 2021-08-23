import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ClientsOverview from './Overview/ClientsOverview';
import { Routes } from '../../../core/routing';
import ClientDetailContainer from './Detail/ClientDetailContainer';
// import AdminRoute from '../../Onboarding/Login/Shared/Route/AdminRoute';
import ClientNew from './Create/ClientNew';

const Clients = () => {
    return (
        <>
            <Switch>
                <Route path={Routes.ClientsCreate}>
                    <ClientNew />
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
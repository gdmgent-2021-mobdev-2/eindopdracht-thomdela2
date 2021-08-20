import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../../../core/routing';
import InvoicesDetail from './Detail/InvoicesDetail';
import InvoicesOverview from './Overview/InvoicesOverview';

const Invoices = () => {
    return (
        <>
            <Switch>
                <Route path={Routes.InvoicesDetail}>
                    <InvoicesDetail />
                </Route>
                <Route path={Routes.Invoices}>
                    <InvoicesOverview />
                </Route>
                <Redirect to={Routes.Invoices} />
            </Switch>
        </>
    )
}

export default Invoices;
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Projects } from './Components/App/Projects';
import { Clients } from './Components/App/Clients';
import { Invoices } from './Components/App/Invoices';
import { Routes} from './core/routing';

const MainRouting = () => {
    return (
        <Switch>
            <Route path={Routes.Projects}>
                <Projects />
            </Route>
            <Route path={Routes.Clients}>
                <Clients />
            </Route>
            <Route path={Routes.Invoices}>
                <Invoices />
            </Route>
            <Redirect to={Routes.Projects} />
        </Switch>
    )
}

export default MainRouting;
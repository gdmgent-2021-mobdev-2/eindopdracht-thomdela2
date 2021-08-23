import React, {useCallback} from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import { Routes } from '../../../../core/routing';
import ClientUpdate from './Edit/ClientUpdate';
import ClientsDetail from './ClientsDetail';
import { fetchClient } from '../../../../core/modules/clients/api';
import useFetch from '../../../../core/hooks/useFetch';
import AdminRoute from '../../../Onboarding/Login/Shared/Route/AdminRoute';


const ClientDetailContainer = () => {

    const {id} = useParams();

    const apiCall = useCallback(() => {
        return fetchClient(id);
    }, [id])

    const { data : client, setData, error, isLoading } = useFetch(apiCall);


    if(isLoading) return "Loading...";
    if(error) {
        console.log(error);
        return "Error!"
    };

    return (
        <Switch>
            <Route path={Routes.ClientsEdit}>
                <ClientUpdate onUpdate={(data) => setData(data)} client={client} />
            </Route>
            <Route path={Routes.ClientsDetail}>
                <ClientsDetail client={client} />
            </Route>
            <Redirect to={Routes.Clients} />
        </Switch>
    )
}

export default ClientDetailContainer;
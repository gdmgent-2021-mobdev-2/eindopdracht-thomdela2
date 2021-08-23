import React, {useCallback} from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { Routes } from '../../../../core/routing';
import ClientEdit from './Edit/ClientEdit';
import ClientsDetail from './ClientsDetail';
import { fetchClient } from '../../../../core/modules/clients/api';
import useFetch from '../../../../core/hooks/useFetch';


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
                <ClientEdit onUpdate={(data) => setData(data)} client={client} />
            </Route>
            <Route path={Routes.ClientsDetail}>
                <ClientsDetail client={client} />
            </Route>
        </Switch>
    )
}

export default ClientDetailContainer;
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import useAuthApi from '../../../../../core/hooks/useAuthApi';
import { updateClient } from '../../../../../core/modules/clients/api';
import { route, Routes } from '../../../../../core/routing';
import ErrorAlert from '../../../../Onboarding/Login/Shared/ErrorAlert';
import ClientForm from '../../Form/ClientForm';

const ClientEdit = ({ client, onUpdate }) => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(updateClient(data))
            .then((data) => {
                onUpdate(data);
                history.push(route(Routes.ClientsDetail, { id: data._id }));
            })
            .catch((error) => {
                console.log(error.message);
                setError(error);
                setIsLoading(false);
            });
    };

    return (
        <main>
            <div className="innerMain">
                <h1>
                Edit Client 
                </h1>
                <ClientForm onSubmit={handleSubmit} disabled={isLoading} initialData={client} />
                <ErrorAlert error={error} />
            </div>
        </main>
    )
}

export default ClientEdit;
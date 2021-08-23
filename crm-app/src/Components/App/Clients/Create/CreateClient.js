import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import useAuthApi from '../../../../core/hooks/useAuthApi';
import { createClient } from '../../../../core/modules/clients/api';
import { Routes } from '../../../../core/routing';
import ErrorAlert from '../../../Onboarding/Login/Shared/ErrorAlert';
import ClientForm from '../Form/ClientForm';

const CreateClient = () => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(createClient(data))
            .then(() => {
                history.push(Routes.Clients);
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
                Create Client 
                </h1>
                <ClientForm onSubmit={handleSubmit} disabled={isLoading} />
                <ErrorAlert error={error} />
            </div>
        </main>
    )
}

export default CreateClient;
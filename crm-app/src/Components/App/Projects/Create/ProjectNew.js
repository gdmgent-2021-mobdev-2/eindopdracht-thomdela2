import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import useAuthApi from '../../../../core/hooks/useAuthApi'
import { createProject } from '../../../../core/modules/projects/api';
import { Routes } from '../../../../core/routing';
import ErrorAlert from '../../../Onboarding/Login/Shared/ErrorAlert';
import ProjectForm from '../Form/ProjectForm'

const ProjectNew = () => {

    const withAuth = useAuthApi();
    const history = useHistory();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(createProject(data))
            .then(() => {
                history.push(Routes.Projects);
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
                <h1>Create project</h1>
            </div>
            <ProjectForm onSubmit={handleSubmit} disabled={isLoading} />
            <ErrorAlert error={error} />
        </main>
    )
}

export default ProjectNew;
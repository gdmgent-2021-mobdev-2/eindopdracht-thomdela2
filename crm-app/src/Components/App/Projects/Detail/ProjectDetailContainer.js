import React, { useCallback } from 'react'
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import useFetch from '../../../../core/hooks/useFetch';
import { fetchProject } from '../../../../core/modules/projects/api';
import { Routes } from '../../../../core/routing';
import AdminRoute from '../../../Onboarding/Login/Shared/Route/AdminRoute';
import ProjectEdit from './Edit/ProjectEdit';
import ProjectsDetail from './ProjectsDetail';

const ProjectDetailContainer = () => {

    const {id} = useParams();

    const apiCall = useCallback(() => {
        return fetchProject(id);
    }, [id]);

    const { data : project, setData, error, isLoading } = useFetch(apiCall);

    if(isLoading) return "Loading...";
    if(error) {
        console.log(error);
        return "Error!"
    }

    return (
        <Switch>
            <AdminRoute path={Routes.ProjectsEdit}>
                <ProjectEdit onUpdate={(data) => setData(data)} project={project} />
            </AdminRoute>
            <Route path={Routes.ProjectsDetail}>
                <ProjectsDetail project={project} />
            </Route>
            <Redirect to={Routes.Projects} />
        </Switch>
    )
}

export default ProjectDetailContainer;
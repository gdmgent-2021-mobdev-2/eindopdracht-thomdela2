import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../../../core/routing';
// import AdminRoute from '../../Onboarding/Login/Shared/Route/AdminRoute';
import ProjectNew from './Create/ProjectNew';
import ProjectDetailContainer from './Detail/ProjectDetailContainer';
import ProjectsOverview from './Overview/ProjectsOverview';

const Projects = () => {
    return (
        <>
            <Switch>
                <Route path={Routes.ProjectsCreate}>
                    <ProjectNew />
                </Route>
                <Route path={Routes.ProjectsDetail}>
                    <ProjectDetailContainer />
                </Route>
                <Route path={Routes.Projects}>
                    <ProjectsOverview />
                </Route>
                <Redirect to={Routes.Projects} />
            </Switch>
        </>
    )
}

export default Projects;
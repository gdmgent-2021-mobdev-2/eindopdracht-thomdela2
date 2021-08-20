import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../../../core/routing';
import ProjectsDetail from './Detail/ProjectsDetail';
import ProjectsOverview from './Overview/ProjectsOverview';

const Projects = () => {
    return (
        <>
            <Switch>
                <Route path={Routes.ProjectsDetail}>
                    <ProjectsDetail />
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
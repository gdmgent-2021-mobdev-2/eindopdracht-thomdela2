import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../../../core/hooks/useFetch';
import { route, Routes } from '../../../../core/routing';

const ProjectsOverview = () => {

    const { data : projects, refresh, error, isLoading } = useFetch('/projects');

    if(isLoading) return "Loading...";
    if(error) return alert(error);

    return (
        <>
            <h1>Projects</h1>
            <button onClick={() => refresh()}>Refresh</button>
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        <Link to={route(Routes.ProjectsDetail, { id: project._id })}>{project.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProjectsOverview;
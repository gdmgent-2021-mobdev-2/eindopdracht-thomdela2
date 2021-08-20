import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../../../core/hooks/useFetch';
import { route, Routes } from '../../../../core/routing';

const ProjectsOverview = () => {

    const { data : projects, refresh, error, isLoading } = useFetch('/data.json');

    if(isLoading) return "Loading...";
    if(error) return alert(error);

    return (
        <>
            <h1>Projects</h1>
            <button onClick={() => refresh()}>Refresh</button>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={route(Routes.ProjectsDetail, { id: project.id })}>{project.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProjectsOverview;
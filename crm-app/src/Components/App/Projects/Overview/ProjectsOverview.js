import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../../../core/hooks/useFetch';
import { fetchProjects } from '../../../../core/modules/projects/api';
import { route, Routes } from '../../../../core/routing';

const ProjectsOverview = () => {

    const { data : projects, error, isLoading } = useFetch(fetchProjects);

    if(isLoading) return "Loading...";
    if(error) {
        console.log(error);
        return "Error!"
    };

    return (
        <main>
            <div className="innerMain">
                <h1>Projects</h1>
                <Link className="btn btn-add" to={Routes.ProjectsCreate}>Create project</Link>

                <ul>
                    {projects.map((project) => (
                        <li key={project._id}>
                            <Link to={route(Routes.ProjectsDetail, { id: project._id })}>{project.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default ProjectsOverview;
import React from 'react';
import { useParams } from 'react-router-dom';

/*
 * project detail 
 * :id 
 */
const ProjectsDetail = () => {

    // destructure id from params
    const {id} = useParams();

    return (
        <>
            <h1>Project Detail {id}</h1>
        </>
    )
}

export default ProjectsDetail;
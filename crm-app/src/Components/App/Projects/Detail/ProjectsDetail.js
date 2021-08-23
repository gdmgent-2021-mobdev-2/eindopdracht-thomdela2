import React from 'react';
// import { fetchClient } from '../../../../core/modules/clients/api';

/*
 * project detail 
 * :id 
 */
const ProjectsDetail = ({ project }) => {


    /*const clientCall = useCallback(() => {
        return fetchClient(project.clientId);
    }, [project.clientId])*/
    // const { data : client } = useFetch(clientCall);
    // TODO: add client


    if(project) {
        return (
            <main>
                <div className="innerMain">
                    <h1>{project.name}</h1>
                    <p>{project.state}</p>
                </div>
            </main>
        )
    }
}

export default ProjectsDetail;
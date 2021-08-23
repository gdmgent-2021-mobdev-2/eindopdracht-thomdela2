import React, {useState, useEffect, useCallback} from 'react';
// import * as yup from 'yup';
import { getValidationErrors } from '../../../../core/utils/validation';
import { Button, Input } from '../../../Design/System';

// const schema = yup.object().schape({
//     name: yup.string().required(),
//     state: yup.string().required(),
//     clientId: yup.string().required(),
// });

const defaultData = {
    name: '',
    state: '',
    clientId: ''
}

const ProjectForm = ({ onSubmit, initialData = {}, disabled }) => {
    const [isTouched, setIsTouched] = useState();
    const [data, setData] = useState({
        ...defaultData,
        ...initialData,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        validate();
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const validate = useCallback((onSucces) => {
        if(onSucces) {
            onSubmit(data);
        }
    }, [data, onSubmit]);

    useEffect(() => {
        if(isTouched) {
            validate();
        }
    }, [data, isTouched, validate])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsTouched(true);
        validate(() => {
            onSubmit(data);
        });
    }

    return (
        <div className="innerMain">
            <p>Fill in the form to create a project</p>
            <form onSubmit={handleSubmit} noValidate={true}>

                
            <label htmlFor="name">Name</label>
                <Input type="text" 
                        name="name" 
                        value={data.name} 
                        onChange={handleChange}
                        disabled={disabled}
                        error={errors.name}
                    />

                                    
                <label htmlFor="state">State</label>
                <Input type="text" 
                        name="state" 
                        value={data.state} 
                        onChange={handleChange}
                        disabled={disabled}
                        error={errors.state}
                    />

                                    
                <label htmlFor="clientId">Client Id</label>
                <Input type="text" 
                        name="clientId" 
                        value={data.clientId} 
                        onChange={handleChange}
                        disabled={disabled}
                        error={errors.clientId}
                    />

                    <Button type="submit">{data._id ? 'Update' : 'Create'}</Button>

            </form>
        </div>
    )
}

export default ProjectForm;
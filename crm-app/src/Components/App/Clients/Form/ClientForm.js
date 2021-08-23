import React, {useState, useEffect, useCallback} from 'react';
import { Button, Input } from '../../../Design/System';
import * as yup from 'yup';
import { getValidationErrors } from '../../../../core/utils/validation';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    company: yup.string().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    slug: yup.string().required(),
});

const defaultData = {
    company: '',
    email: '',
    firstname: '',
    lastname: '',
    slug: ''
}

const ClientForm = ({ onSubmit, initialData = {}, disabled }) => {
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
        schema.validate(data, { abortEarly: false })
            .then(() => {
                if(onSucces) {
                    onSubmit(data);
                }
            }).catch((e) => {
                setErrors(getValidationErrors(e));
            });
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
            <p>Fill in the form to create a client</p>
            <form onSubmit={handleSubmit} noValidate={true}>
                
                <label htmlFor="company">Company</label>
                <Input type="text" 
                        name="company" 
                        value={data.company} 
                        onChange={handleChange}
                        disabled={disabled}
                        error={errors.company}
                    />

                <label htmlFor="email">Email address</label>
                <Input type="email" 
                        name="email" 
                        value={data.email} 
                        onChange={handleChange}
                        disabled={disabled}
                        error={errors.email}
                    />

                <label htmlFor="firstname">Firstname</label>
                <Input type="text" 
                        name="firstname" 
                        value={data.firstname} 
                        onChange={handleChange}
                        disabled={disabled}
                        error={errors.firstname}
                    />

                <label htmlFor="lastname">Lastname</label>
                <Input type="text" 
                        name="lastname" 
                        value={data.lastname} 
                        onChange={handleChange}
                        disabled={disabled}
                        error={errors.lastname}
                    />

                <label htmlFor="slug">Slug</label>
                <Input type="text" 
                        name="slug" 
                        value={data.slug} 
                        onChange={handleChange}
                        disabled={disabled}
                        error={errors.slug}
                    />

                <Button type="submit">{data._id ? 'Update' : 'Create'}</Button>
            </form>
        </div>
    )
}

export default ClientForm;
import React, {useState} from 'react';
import { Button, Input } from '../../../Design/System';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    company: yup.string().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    gender: yup.string().required(),
    age: yup.number().required(),
});

const defaultData = {
    company: '',
    email: '',
    firstname: '',
    lastname: '',
    gender: '',
    age: '21',
}

const ClientForm = ({ onSubmit, initialData = {}, disabled }) => {
    const [data, setData] = useState({
        ...defaultData,
        ...initialData,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        schema.validate(data, { abortEarly: false })
            .then(() => {
                onSubmit(data);
            }).catch((e) => {
                setErrors(e);
            });
    }

    return (
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

            <label htmlFor="gender">Gender</label>
            <Input type="text" 
                    name="gender" 
                    value={data.gender} 
                    onChange={handleChange}
                    disabled={disabled}
                    error={errors.gender}
                />

            <label htmlFor="age">Age</label>
            <Input type="number" 
                    name="age" 
                    value={data.age} 
                    onChange={handleChange}
                    disabled={disabled}
                    error={errors.age}
                />

            <Button type="submit">{data._id ? 'Update' : 'Create'}</Button>
        </form>
    )
}

export default ClientForm;
import React, {useState} from 'react'
import { Button, Input } from '../../Design/System';
import * as yup from 'yup';
import { login } from '../../../core/modules/auth/api';
import { getValidationErrors } from '../../../core/utils/validation';
import './LoginPage.css';
import { handleApiResult } from '../../../core/utils/api';
import ApiError from '../../../core/error/ApiError';
import AppError from '../../../core/error/AppError';
import ErrorAlert from './Shared/ErrorAlert';

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const LoginPage = ({ setUser }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [error, setError] = useState();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        schema.validate(data).then(() => {
            // login module
            login(data)
            .then(handleApiResult)
            .then((data) => {
                // succes
                console.log(data);
                setUser(data);
            })
            .catch((e) => {
                if (e instanceof ApiError) {
                    if (e.isUnauthorized()) {
                        setError(new AppError('Wrong combination'));
                    } else {
                        setError(e);
                    }
                }
                    setError(new AppError(e));
                
            })
        }).catch((err) => {
            //
            setErrors(getValidationErrors(err));
        });
    };

    return (
        <div className="container">
            <div className="text-center">
                <form className="loginForm"
                    onSubmit={handleSubmit}
                    noValidate={true}>
                    <h1>
                        Log in to explore our CRM
                    </h1>

                    <small htmlFor="email">Email address</small>
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        error={errors.email}
                        onChange={handleChange}
                    />

                    <small htmlFor="password">Password</small>
                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        error={errors.password}
                        onChange={handleChange}
                    />

                    <Button color="primary" type="submit">
                        Log in
                    </Button>
                </form>

                <ErrorAlert error={error} />

            </div>
        </div>
    )
}

export default LoginPage;
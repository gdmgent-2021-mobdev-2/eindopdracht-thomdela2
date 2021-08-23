import React, {useState} from 'react'
import { Button, Input } from '../../Design/System';
import * as yup from 'yup';
import { login } from '../../../core/modules/auth/api';
import { getValidationErrors } from '../../../core/utils/validation';

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
            .then((res) => res.json())
            .then((data) => {
                // succes
                console.log(data);
                setUser(data);
            })
            .catch((e) => {
                setError(e);
            })
        }).catch((err) => {
            //
            setErrors(getValidationErrors(err));
        });
    };

    return (
        <div className="container">
            <div className="text-center">

                {error && (
                    <div>
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    noValidate={true}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        1 step away from your dashboard...
                    </h1>

                    <label htmlFor="email">Email address</label>
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        error={errors.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Password</label>
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
            </div>

        </div>
    )
}

export default LoginPage;
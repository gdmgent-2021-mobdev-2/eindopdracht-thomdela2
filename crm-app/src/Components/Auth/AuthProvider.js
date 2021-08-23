import React, {createContext, useContext, useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import App from '../../App';
import { Routes } from '../../core/routing';
import { getUser, storeUser } from '../../core/storage';
import LoginPage from '../Onboarding/Login/LoginPage';

const AuthContext = createContext();

/* 
 * container: condition-based wrapper around components
 * if authenticated user
 */
const AuthContainer = () => {

    const [user, setUser] = useState(getUser());

    const updateUser = (user) => {
        storeUser(user);
        setUser(user);
    }

    const logout = () => {
        updateUser(null);
    };

    if(user) {
        return (
            <AuthContext.Provider value={{ user, logout }}>
                <App />
            </AuthContext.Provider>
        )
    }

    return (
        <Switch>
            <Route path={Routes.Login}>
                <LoginPage setUser={updateUser} />
            </Route>
            <Redirect to={Routes.Login} />
        </Switch>
    )
};

const useAuth = () => {
    return useContext(AuthContext);
}

export {
    useAuth,
}

export default AuthContainer;
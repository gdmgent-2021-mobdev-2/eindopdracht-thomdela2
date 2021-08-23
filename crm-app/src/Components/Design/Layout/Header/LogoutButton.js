import React from 'react';
import { useAuth } from '../../../Auth/AuthProvider';
import { Button } from '../../System';

const LogoutButton = () => {

    const { logout } = useAuth();

    return (
        <Button onClick={logout}>
            Log out
        </Button>
    )
}

export default LogoutButton;
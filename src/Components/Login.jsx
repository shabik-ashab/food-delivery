import React from 'react'
import { signInUsingGoogle } from 'firebase/auth';
import useAuth from '../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const {signInUsingGoogle} = useAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div classname="">
            <button onClick={handleGoogleLogin}>google</button>
        </div>
    )
}

export default Login

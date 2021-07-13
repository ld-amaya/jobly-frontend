import React from 'react';
import LoginForm from './LoginForm';

function Login() {
    return (
        <div className='container col-md-4 mt-5'>
            <h3 className = 'text-left'>Log In</h3>
            <LoginForm />
        </div>
    )
}

export default Login;
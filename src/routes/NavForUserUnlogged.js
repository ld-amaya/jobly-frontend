import React from 'react';
import { NavLink } from 'react-router-dom';

function NavForUserUnLogged() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className='nav-link' exact to='/'>Jobly</NavLink>   
            <NavLink className='nav-link' exact to='/login'>Login</NavLink>
            <NavLink className ='nav-link' exact to ='/signup'>Sign Up</NavLink>
        </nav>
    )
}
export default NavForUserUnLogged;
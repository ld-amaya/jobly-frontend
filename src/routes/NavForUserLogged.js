import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';

function NavForUserlogged() {
    const { currentUser, logout } = useContext(UserContext);
    console.log(currentUser);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className='nav-link' exact to='/'>Jobly</NavLink>     
            <NavLink className='nav-link' exact to='/companies'>Companies</NavLink>
            <NavLink className='nav-link' exact to='/jobs'>Jobs</NavLink>
            <NavLink className='nav-link' exact to='/profile'>Profile</NavLink>
            <NavLink onClick ={logout} className='nav-link' exact to='/logout'> Logout { currentUser.username }</NavLink>
        </nav>
    )
}
export default NavForUserlogged;
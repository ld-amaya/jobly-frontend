import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className='nav-link' exact to='/'>Jobly</NavLink>     
                <NavLink className='nav-link' exact to='/companies'>Companies</NavLink>
                <NavLink className='nav-link' exact to='/jobs'>Jobs</NavLink>
                <NavLink className='nav-link' exact to='/profile'>Profile</NavLink>
                <NavLink className ='nav-link' exact to ='/logout'>Logout</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
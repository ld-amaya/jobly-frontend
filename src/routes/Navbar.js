import React, { useContext } from 'react';
import NavForUserLogged from './NavForUserLogged';
import NavForUserUnlogged from './NavForUserUnlogged';
import UserContext from '../context/UserContext';

function Navbar() {
    const { user } = useContext(UserContext);
    const handleNav =  (user) ? <NavForUserLogged /> : <NavForUserUnlogged />
    return (
        <div>
            {handleNav}
        </div>
    );
}

export default Navbar;
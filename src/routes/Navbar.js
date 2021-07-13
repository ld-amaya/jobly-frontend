import React, { useContext } from 'react';
import NavForUserLogged from './NavForUserLogged';
import NavForUserUnlogged from './NavForUserUnlogged';
import UserContext from '../context/UserContext';

function Navbar() {
    const { currentUser } = useContext(UserContext);

    const handleNav =  (currentUser) ? <NavForUserLogged /> : <NavForUserUnlogged />
    return (
        <div>
            {handleNav}
        </div>
    );
}

export default Navbar;
import React from 'react';
import './Header.css'
import AppName from './AppName';
import Search from './Search';

const Header = () => {
    return (
        <div className='Header'>
            <AppName/><Search/>
        </div>
    );
};

export default Header;
import React from 'react'
import './Header.css';

const Header = ({title,subtitle}) => {
    return (
        <div className='Header'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

export default Header


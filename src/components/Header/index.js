import React from "react";
import './style.module.css';

export default function Header () {
    return (
        <header>
            <img src='/' id='profilePic'></img>
            <h3 className='openWindow'></h3>
            <p className='nameAndLastName'></p>
        </header>
    )
}
import React from "react"
import profilePic from '../ProfilePic/ProfilePicGiu.png';
import style from '../../pages/style.css';

export function ProfilePic () {
    return (
        <img src={profilePic} className={style.profilePic} alt="Foto de perfil da usuária">
        </img>
    )
};
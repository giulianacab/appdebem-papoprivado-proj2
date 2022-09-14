/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 13/09/2022 - 18:56:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
import './style.module.css';
import {Form} from "../../Form/index"   
import { useState } from 'react';
import usersList  from '../../data';


export function Comments() {

  const [userList, setUsersList] = useState(
    usersList.map((currentUser) => {
      return {
        username: currentUser.username       
      };
    })
  );

  const [form, setForm] = useState({
    comment: ""
  });
    return (
        <>
        <div classNameName='headerTop'>
            <img src='/' id='iconConfig'></img>
        </div>


        <div classNameName='header'>
            <img src='/' id='profilePic'></img>
            <h3 classNameName='openWindow'></h3>
            <p classNameName='nameAndLastName'></p>
        </div>


        <Form
            form={form}
            setForm={setForm}
            setUsersList={setUsersList}
            usersList={usersList}
            />


        <div classNameName='navbar'>
            <img src='/' id='icon1'></img>
            <img src='/' id='icon2'></img>
            <img src='/' id='icon3'></img>
            <img src='/' id='icon4'></img>
            <img src='/' id='icon5'></img>
        </div>
        </>
    )
}
/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 13/09/2022 - 18:54:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
import './style.module.css';
import {Form} from "../../Form/index"   


export function PrivateTalk () {
    return (
        <>
        <div className='headerTop'>
            <img src='/' id='iconConfig'></img>
        </div>


        <div className='header'>
            <img src='/' id='profilePic'></img>
            <h3 className='openWindow'></h3>
            <p className='nameAndLastName'></p>
        </div>


        <div className='body'>
Colocar cards apenas com foto e título
        </div>


        <div className='navbar'>
            <img src='/' id='icon1'></img>
            <img src='/' id='icon2'></img>
            <img src='/' id='icon3'></img>
            <img src='/' id='icon4'></img>
            <img src='/' id='icon5'></img>
        </div>
        </>
    )
}
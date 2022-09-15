/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 14/09/2022 - 21:37:27
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
// Tela de username
import { useState } from "react";
import { useLocation} from "react-router-dom";
import './style.module.css';


export function Form(props) { 

  // const { form, setForm, setUserList, userList } = props;
  // function handleChange(event) {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // }
  // function handleAddUsers(event) {
  //   event.preventDefault();
  //   setUserList([form, ...userList]);
  // }
  return (
    <>
      <h3>Faça seu cadastro</h3>
      <p>Você pode usar um nome de usuário aleatório caso queira permanecer anônima</p>
      <form>
        <label></label>
        <input
          placeholder="Nome de usuário"
          // id="username"
          type="text"
          // onChange={handleChange}
          // name="username"
        />      
      </form>
      <button onClick={() => (window.location.href = '/signup')} className="btn btn-primary" >
          Continuar
        </button>
      <p>Já tem uma conta? <a>Entre aqui</a></p>
{/* Colocar link da tela de login no "Entre aqui" */}
    </>
  );
}
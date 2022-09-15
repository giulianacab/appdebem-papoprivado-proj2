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
import style from '../style.css';


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
    <div className={style.header}>
      <div>
          <img src="https://images2.imgbox.com/f4/44/mSjTeGV2_o.png" className={style.logoLoading}/>
      </div>
    </div>


    <div className={style.body}>
      <h3>Faça seu cadastro</h3>
      <h6>Você pode usar um nome de usuário aleatório caso queira permanecer anônima</h6>
      
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

      <button onClick={() => (window.location.href = '/signup')} className={style.button} >
          Continuar
      </button>

{/* Colocar link da tela de login no "Entre aqui" */}        
      <p>Já tem uma conta? <a>Entre aqui!</a></p>
    </div>


    <div className={style.footer}>
        <p className={style.footerText}>
            Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
        </p>
    </div>

    </>
  );
}
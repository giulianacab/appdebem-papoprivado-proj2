/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 14/09/2022 - 21:29:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
// Tela de cadastro completo
import { useState } from "react";
import style from '../style.css';
import  usersList  from "../../data"


export function SignUp () {
    const [userList, setUserList] = useState(
      usersList.map((currentUser) => {
        return {
          username: currentUser.username,
          nome: currentUser.nome,
          sobrenome: currentUser.sobrenome,
          email: currentUser.email,
          password: currentUser.password,
        };
      })
    );
  const [form, setForm] = useState({
    title: "",
    description: "",
    img: "",
    // endereço: { rua: "", n: 0, CEP: 40000000 },
  });
  return (
    <>
      <div className={style.body}>

        <div className={style.header}>
          <img src="https://images2.imgbox.com/f4/44/mSjTeGV2_o.png" alt="imagem" className={style.logo} />
        </div>

          
          <h3>Faça seu cadastro!</h3>
          <h6>Não se preocupe: nossa plataforma é completamente segura e ninguém terá acesso aos seus dados.</h6>
        
        <div className={style.loginForm}>
          <form>
            <label htmlFor="Nome" className={style.label}></label>
            <input placeholder="Nome" className={style.placeholder}></input>
          </form>

          <form>
            <label htmlFor="Sobrenome" className={style.label}></label>
            <input placeholder="Sobrenome" className={style.placeholder}></input>
          </form>

          <form>
            <label htmlFor="Email" className={style.label}></label>
            <input placeholder="E-mail" className={style.placeholder}></input>
          </form>

          <form>
            <label htmlFor="Senha" className={style.label}></label>
            <input placeholder="Senha" className={style.placeholder}></input>
          </form>

          <button className={style.button} onClick={() => (window.location.href = '/privatetalk')}>Cadastrar</button>
        </div>
      </div>

      <div className={style.footer}>
          <p className={style.footerText}>
              Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
          </p>
      </div>
      
    </>
  );
  }
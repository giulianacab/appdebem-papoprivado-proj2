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
        
          <img src="https://images2.imgbox.com/f4/44/mSjTeGV2_o.png" alt="imagem" className={style.logo} />
          
          <h3>Faça seu cadastro!</h3>
          <h5>Não se preocupe: nossa plataforma é completamente segura e ninguém terá acesso aos seus dados.</h5>
        
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
          <p>
              Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
          </p>
      </div>
      
    </>
  );
  }
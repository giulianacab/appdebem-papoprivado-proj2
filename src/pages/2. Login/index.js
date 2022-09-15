/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 13/09/2022 - 18:17:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
import { useState } from "react";
import { Form } from "../../Form";
import style from"./style.module.css";


export function Login() {
    const [form, setForm] = useState({});


    return (
        <>    

        <div className={style.header}>
            <img src="/" className="logo"/>
        </div>

        <div className={style.loginForm}>
            <h3>Faça seu login</h3>
            {/* <FormLogin /> */}

            <form>
      <label htmlFor="comment">Email</label>
      <input/>     
    </form>

    <form>
      <label htmlFor="comment">Senha</label>
      <input/>     
    </form>

    <button onClick={() => (window.location.href = '/privatetalk')}>Entrar</button>
            <p className="register">Ainda não é cadastrada? <a href="/signup">Clique aqui</a> </p>
        </div>

        <div className={style.footer}>
            <p className={style.footerText}>
                Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
            </p>
        </div>
        </>
    )
}

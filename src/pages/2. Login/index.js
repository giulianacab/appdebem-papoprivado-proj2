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
import "./style.module.css";

export function Login() {
    const [form, setForm] = useState({});


    return (
        <>    

        <div className="header">
            <img src="/" className="logo"/>
        </div>

        <div className="login-form">
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

    <button>Entrar</button>
            <p className="register">Ainda não é cadastrada? Clique aqui</p>
        </div>

        <div className="footer">
            <p className='footer-text'>
                Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
            </p>
        </div>
        </>
    )
}

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
        <div className={style.body}>
            <div className={style.header}>
                <img src="src/Logos/logo laranja.png" className={style.logo}/>
            </div>

            <div className={style.loginForm}>
                <h3>Faça seu login</h3>
                {/* <FormLogin /> */}

            <form>
                <label htmlFor="comment" className={style.label}>E-mail: </label>
                <input/>     
            </form>

            <form>
                <label htmlFor="comment" className={style.label}>Senha: </label>
                <input/>     
            </form>

            <button navigate={"/loading"}>Entrar!</button>
                <p className={style.register}>Ainda não é cadastrada? Clique aqui</p>
            </div>
        </div>

{/* FOOTER */}

        <div className={style.footer}>
            <p className={style.footerText}>
                Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
            </p>
        </div>
        </>
    )
}

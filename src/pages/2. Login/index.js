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
import "./style.module.css";
// import { FormLogin } from '../../FormLogin'

export function Login() {
    return (
        <>

        <div className={style.header}>
            <img src="/" className="logo"/>
        </div>

        <div className={style.loginForm}>
            <h3>Faça seu login</h3>
            {/* <FormLogin /> */}
            <p className={style.register}>Ainda não é cadastrada? Clique aqui</p>
        </div>

        <div className={style.footer}>
            <p className={style.footer-text}>
                Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
            </p>
        </div>
        </>
    )
}

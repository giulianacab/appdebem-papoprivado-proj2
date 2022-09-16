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

import style from '../style.css';


export function Login() {


    return (
        <>
            <body>
                <div className={style.header}>
                    <img src="https://images2.imgbox.com/f4/44/mSjTeGV2_o.png" alt="imagem" className={style.logo} />
                </div>
            </body>

                <div className={style.loginForm}>
                    <h3>Faça seu login</h3>
                    <h5>Vamos juntas ficar de bem com nós mesmas?</h5>
                    {/* <FormLogin /> */}

                    <form>
                        <label htmlFor="comment" className={style.label}></label>
                        <input placeholder="E-mail" className={style.placeholder} />
                    </form>

                    <form>
                        <label htmlFor="comment" className={style.label}></label>
                        <input placeholder="Senha" className={style.placeholder} />
                    </form>

                    <button className={style.button} onClick={() => (window.location.href = '/privatetalk')}>E N T R A R !</button>
                    <h5 className={style.register}>Ainda não é cadastrada? </h5>
                    <br></br>
                    <h5><a href="/username"> Clique aqui!</a></h5>
                </div>
            

            {/* <div className={style.loginForm}>
        <h3>Faça seu login</h3>
        <FormLogin />

        <form>
        <label htmlFor="comment">Email</label>
        <input/>
        </form>

        <form>
        <label htmlFor="comment">Senha</label>
        <input/>
        </form>
    </div>  */}



            {/* <button onClick={() => (window.location.href = '/privatetalk')}>Entrar</button> */}
            {/* <p className="register">Ainda não é cadastrada? <a href="/signup">Clique aqui!</a> </p> */}
            <div className={style.footerInicial}>
                <p>
                    Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
                </p>
            </div>
        </>
    )
}

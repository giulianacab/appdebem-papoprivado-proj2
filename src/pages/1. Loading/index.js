import style from '../style.css';


export function Loading () {
    return (
        <>
        <body>
            <div className={style.pageLoading}>
                <div>
                    <img src="https://images2.imgbox.com/f4/44/mSjTeGV2_o.png" className={style.logoLoading}/>
                </div>


                <div className={style.footer}>
                    <p className={style.footerText}>
                        Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
                    </p>
                </div>
            </div>
        </body>

        </>
)};
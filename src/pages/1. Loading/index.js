import style from '../style.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Loading () {
    const navigate = useNavigate()
useEffect(() => {
setTimeout(() => {navigate ("/login")}, 3000)
}, [])


    
    return (
        <>
        <body>
            {/* <div className={style.pageLoading}> */}
                <div>
                    <img src="https://images2.imgbox.com/f4/44/mSjTeGV2_o.png" className={style.logoLoading}/>
                </div>

        </body>
                <div className={style.footerInicial}>
                    <p>
                        Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
                    </p>
                </div>
            {/* </div> */}
        

        </>
)};
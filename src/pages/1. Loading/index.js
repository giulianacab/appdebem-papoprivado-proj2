/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 15/09/2022 - 12:04:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
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
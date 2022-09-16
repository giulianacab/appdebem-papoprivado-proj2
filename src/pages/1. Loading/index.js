import style from '../style.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Loading () {
    const navigate = useNavigate()
useEffect(() => {
setTimeout(() => {navigate ("/login")}, 6000)
}, [])


    
    return (
        <>
        <head>
            {/* <div className={style.pageLoading}> */}
                <div>
                    <img src="https://images2.imgbox.com/f4/44/mSjTeGV2_o.png" className={style.logoLoading}/>
                </div>

        </head>

        <img src='../../components/Spinner-1.1s-254px.gif' width="50px" className={style.gifLoading} alt='GIF de carregamento da página'/>


            <div className={style.footerInicial}>
                <p>
                    Desenvolvido por Giuliana Cabral e Vinícius Mello – Todos os direitos reservados
                </p>
            </div>
        

        </>
)};
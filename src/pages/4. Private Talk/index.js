import style from '../style.css';
// import { Form } from "../../Form/index"   
import { Communities } from '../../components/Communities/index';
// import {CommunitiesList} from '../../App'
// import { useState } from 'react';
// import HeaderTop from '../../components/HeaderTop';
// import Header from '../../components/Header';
// import Body from '../../components/Body';
// import Navbar from '../../components/Navbar';
import profilePic from '../../components/ProfilePic/ProfilePicGiu.png';
import wavyBorder from '../../WavyDesign.svg';
import { ProfilePic } from '../../components/ProfilePic';
import { ConfigIcon } from '../../components/Config. Icon';
import { Link } from 'react-router-dom';
import healthLifeImg from '../../components/Communities/Communities Photos/Vida Saudável.png';
import sleepImg from '../../components/Communities/Communities Photos/Sono e descanso.png';
import mentalHealthImg from '../../components/Communities/Communities Photos/Saúde mental.png';
import emotionalImg from '../../components/Communities/Communities Photos/Inteligência emocional.png';
import sexImg from '../../components/Communities/Communities Photos/Sexo e menstruação.png';
import relationshipImg from '../../components/Communities/Communities Photos/Relacionamentos.png';
import anxietyImg from '../../components/Communities/Communities Photos/Ansiedade e Depressão.png';
import bipolarImg from '../../components/Communities/Communities Photos/Transtorno Bipolar.png';



export function PrivateTalk () {

    return (
        <>


{/* HEADER C/ CONFIG */}
        <head>
            <div className={style.headerTop}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"  viewBox="0 0 16 16" className={style.configIcon}>
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg> */}
                <ConfigIcon className={style.ConfigIcon}/>
            </div>
        </head>



{/* HEADER C/ NOME E FOTO */}

        <body>
            <div className={style.headerPic}>
                <ProfilePic />
            </div>
            <div className={style.headerText}>
                <h6 className={style.openWindow}>PAPO PRIVADO</h6>
                <h3 className={style.nameAndLastName}>Giuliana Cabral</h3>
                {/* <img src={wavyBorder} className={style.wavyBorder} alt="wavy border"/> */}
            </div>
        </body>





{/* CARDS */}
            <article>

                
                <div className={style.flexContainer}>

                    <div className={style.row1}>
                        <Link to={"/comments"}>
                            <div className={style.card}>
                            <img className={style.cardImgTop} src={healthLifeImg} alt="Card cap" />
                            <div className={style.cardBody}>
                                <h4 className={style.cardTitle}>Vida saudável</h4>
                            </div>
                            </div>
                        </Link>
                    
                    
                        <Link to={"/comments"}>
                            <div className={style.card}>
                            <img className={style.cardImgTop} src={sleepImg} alt="Card cap" />
                            <div className={style.cardBody}>
                                <h4 className={style.cardTitle}>Sono e descanso</h4>
                            </div>
                            </div>
                        </Link>
                    </div>

                    <div className={style.row2}>
                        <Link to={"/comments"}>
                            <div className={style.card}>
                            <img className={style.cardImgTop} src={mentalHealthImg} alt="Card cap" />
                            <div className={style.cardBody}>
                                <h4 className={style.cardTitle}>Saúde mental</h4>
                            </div>
                            </div>
                        </Link>

                        <Link to={"/comments"}>
                            <div className={style.card}>
                            <img className={style.cardImgTop} src={emotionalImg} alt="Card cap" />
                            <div className={style.cardBody}>
                                <h4 className={style.cardTitle}>Inteligência emocional</h4>
                            </div>
                            </div>
                        </Link>
                    </div>

                    <div className={style.row3}>
                        <Link to={"/comments"}>
                            <div className={style.card}>
                            <img className={style.cardImgTop} src={sexImg} alt="Card cap" />
                            <div className={style.cardBody}>
                                <h4 className={style.cardTitle}>Sexo e menstruação</h4>
                            </div>
                            </div>
                        </Link>

                        <Link to={"/comments"}>
                            <div className={style.card}>
                            <img className={style.cardImgTop} src={relationshipImg} alt="Card cap" />
                            <div className={style.cardBody}>
                                <h4 className={style.cardTitle}>Relacionamentos</h4>
                            </div>
                            </div>
                        </Link>
                    </div>

                    <div className={style.row4}>
                        <Link to={"/comments"}>
                        <div className={style.card}>
                            <img className={style.cardImgTop} src={anxietyImg} alt="Card cap" />
                            <div className={style.cardBody}>
                            <h4 className={style.cardTitle}>Ansiedade e depressão</h4>
                            </div>
                        </div>
                        </Link>
                    

                        <Link to={"/comments"}>
                        <div className={style.card}>
                            <img className={style.cardImgTop} src={bipolarImg} alt="Card cap" />
                            <div className={style.cardBody}>
                            <h4 className={style.cardTitle}>Apoio ao Transtorno Bipolar</h4>
                            </div>
                        </div>
                        </Link>
                    </div>

                </div>

            </article>


{/* NAVBAR */}

        <footer>
            {/* <div className={style.footer}> */}

                <Link to={"/privatetalk"}>
                    <div className={style.menuIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"  viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                        </svg>
                    </div>
                </Link>

                <Link to={"*"}>
                    <div className={style.menuIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white"  viewBox="0 0 16 16">
                            <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
                        </svg>
                    </div>
                </Link>

                <Link to={"*"}>
                    <div className={style.menuIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"  viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </div>
                </Link>

                <Link to={"*"}>
                    <div className={style.menuIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white"  viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                    </div>
                </Link>

                <Link to={"/privatetalk"}>
                    <div className={style.menuIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"  viewBox="0 0 16 16">
                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                        </svg>
                    </div>
                </Link>

                <Link to={"*"}>
                    <div className={style.menuIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"  viewBox="0 0 16 16">
                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"/>
                        </svg>
                    </div>
                </Link>

            {/* </div> */}
        </footer>

        </>
    )
}
/**
    * @description      : 
    * @author           : NOTE-VINICIUS
    * @group            : 
    * @created          : 14/09/2022 - 22:46:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/09/2022
    * - Author          : NOTE-VINICIUS
    * - Modification    : 
**/
import React from "react";
import { Link } from "react-router-dom";
import style from "./style.communities.css";

export function Communities() {
  return (
    <div className={style.cardDeck}>
      <Link to={"/comments"}>
        <div className={style.card}>
          <img className={style.cardImgTop} src="..." alt="Card cap" />
          <div className={style.cardBody}>
            <h5 className={style.cardTitle}>Card title 1</h5>
          </div>
        </div>
      </Link>
      <Link to={"/comments"}>
        <div className={style.card}>
          <img className={style.cardImgTop} src="..." alt="Card cap" />
          <div className={style.cardBody}>
            <h5 className={style.cardTitle}>Card title 1</h5>
          </div>
        </div>
      </Link>
      <Link to={"/comments"}>
        <div className={style.card}>
          <img className={style.cardImgTop} src="..." alt="Card cap" />
          <div className={style.cardBody}>
            <h5 className={style.cardTitle}>Card title 1</h5>
          </div>
        </div>
      </Link>
      <Link to={"/comments"}>
        <div className={style.card}>
          <img className={style.cardImgTop} src="..." alt="Card cap" />
          <div className={style.cardBody}>
            <h5 className={style.cardTitle}>Card title 1</h5>
          </div>
        </div>
      </Link>
      <Link to={"/comments"}>
        <div className={style.card}>
          <img className={style.cardImgTop} src="..." alt="Card cap" />
          <div className={style.cardBody}>
            <h5 className={style.cardTitle}>Card title 1</h5>
          </div>
        </div>
      </Link>
      <Link to={"/comments"}>
        <div className={style.card}>
          <img className={style.cardImgTop} src="..." alt="Card cap" />
          <div className={style.cardBody}>
            <h5 className={style.cardTitle}>Card title 1</h5>
          </div>
        </div>
      </Link>
      <Link to={"/comments"}>
      <div className={style.card}>
        <img className={style.cardImgTop} src="..." alt="Card cap" />
        <div className={style.cardBody}>
          <h5 className={style.cardTitle}>Card title 1</h5>
        </div>
      </div>
      </Link>
      <Link to={"/comments"}>
      <div className={style.card}>
        <img className={style.cardImgTop} src="..." alt="Card cap" />
        <div className={style.cardBody}>
          <h5 className={style.cardTitle}>Card title 1</h5>
        </div>
      </div>
      </Link>
    </div>
  );
}

import React from "react";
import styles from './popup.module.scss';

interface PopupProps {
  isSuccess:()=>void;
  popupHandler: ()=> void;
}
const Popup = ({isSuccess,popupHandler}:PopupProps) => {
    return(
      <div className={styles.popup}>
        <div className={styles.block}>
          <button onClick={popupHandler} className={styles.close}>X</button>
          <p>Подайте заявку на вступление в клуб для доступа к бонусам, чатам и нашей дружной компании :)</p>
          <form onSubmit={e => {e.preventDefault(); isSuccess(); popupHandler()}} action="">
            <input  minLength={5} required type="email" placeholder="Почта"/>
            <input  minLength={3} required type="text" placeholder="Имя"/>
            <input  minLength={5} required type="text" placeholder="Пароль" />
            <button>Подать заявку</button>
          </form>
        </div>
      </div>
    )
}

export default Popup;
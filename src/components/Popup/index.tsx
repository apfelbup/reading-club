import React from "react";
import styles from './popup.module.scss';

interface PopupProps {
  popupHandler: ()=> void;
}
const Popup = ({popupHandler}:PopupProps) => {
    return(
      <div className={styles.popup}>
        <div className={styles.block}>
          <button onClick={popupHandler} className={styles.close}>X</button>
          <p>Подайте заявку на вступление в клуб для доступа к бонусам, чатам и нашей дружной компании :)</p>
          <form action="">
            <input type="text" placeholder="Почта"/>
            <input type="text" placeholder="Имя"/>
            <input type="text" placeholder="Пароль" />
            <button>Подать заявку</button>
          </form>
        </div>
      </div>
    )
}

export default Popup;
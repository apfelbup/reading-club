import React from "react";
import styles from './popup.module.scss';

interface PopupProps {
  successHandler: ()=> void;
}
const SuccessPopup = ({successHandler}:PopupProps) => {
    return(
      <div className={styles.popup}>
        <div className={styles.block}>
          <button onClick={successHandler} className={styles.close}>X</button>
          <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        </div>
      </div>
    )
}

export default SuccessPopup;
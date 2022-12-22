import React from "react";
import { Link } from "react-router-dom";
import styles from './navigate.module.scss';


const Navigate = () => {
    return(
      <div className={styles.navigate}>
        <Link  onClick={() => window.scrollTo(0, 0)} to="/club" className={styles.firstBlock}> 
            <div className={styles.navInfo}>
            <h4> Участие</h4>
            <p>Клуб, меняющий взгляд на чтение через игры, поддержку и доброе комьюнити.</p>
            </div>
        </Link>
        <Link  onClick={() => window.scrollTo(0, 0)} to="/contact" className={styles.secondBlock}>
        <div className={styles.navInfo}>
        <h4>Контакты</h4>
            <p>Напишите нам, и мы ответим в кратчайшие сроки.</p>
        </div>
        </Link>
        <Link  onClick={() => window.scrollTo(0, 0)} to="/booklist" className={styles.thirdBlock}>
        <div className={styles.navInfo}>
        <h4>Книги</h4>
            <p>Находите интересные книги и добавляйте к себе на полку.</p>
        </div>
        </Link>
      </div>
    )
}

export default Navigate;
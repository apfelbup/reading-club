import React from "react";
import styles from './main.module.scss';
import Navigate from "../../components/Navigate";
import SignUp from "../../components/SignUp";
import { Link } from "react-router-dom";
import ActualBook from "../../components/ActualBook";


const MainPage = ({dataState}:any) => {
    return(
      <div className={styles.main}>
      <h1 className={styles.mainTitle}>Здесь говорят <br/> о книгах</h1>
      <div className={styles.TitleInfo}>
        <div className={styles.TitleInfoBlock}>
          <div className={styles.firstBlock}></div>
          <h3 className={styles.text}>Больше прочитанного</h3>
          <p className={styles.subtext}>Вы ощутите новый прилив мотивации к чтению и изучению.</p>
        </div>
        <div className={styles.TitleInfoBlock}>
        <div className={styles.secondBlock}></div>
          <h3 className={styles.text}>Меньше поисков</h3>
          <p className={styles.subtext}>Выберите книги, рекомендованные нашими специалистами.</p>
        </div>
        <div className={styles.TitleInfoBlock}>
        <div className={styles.thirdBlock}></div>
          <h3>Уют и кофе</h3>
          <p>Наши встречи проводятся как онлайн, так и оффлайн.</p>
        </div>
      </div>
      <div className={styles.membership}>
          <Link to="/club" className={styles.block} onClick={() => window.scrollTo(0, 0)}>
            <p>Узнать больше о клубе и участии</p>
          </Link>
      </div>
      <ActualBook />
      <Navigate/>
      <SignUp/>
      </div>
    )
}

export default MainPage;
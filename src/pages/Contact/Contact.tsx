import React from "react";
import SignUp from "../../components/SignUp";
import styles from './contact.module.scss';


const Contact = () => {
    return(
    <div className={styles.contact}>
        <div className={styles.contactBlock}>
        <div >
            <p>Контакты</p>
        </div>
        </div>

        <p className={styles.title}>Свяжитесь с нами!</p>
        <div className={styles.contactForm}>
            <div>
            <p>У вас есть предложения или вопросы?
                Свяжитесь с нами в пару кликов
            </p>
            <form action="">
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Почта"/>
                <textarea className={styles.message} placeholder="Ваше сообщение"/>
                <button>Отправить</button>
            </form>
            </div>
        </div>
        <SignUp/>
    </div>
    )
}

export default Contact;
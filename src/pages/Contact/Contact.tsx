import React from "react";
import SignUp from "../../components/SignUp";
import styles from './contact.module.scss';

interface ContactProps {
    isSuccess:()=> void;
}
const Contact = ({isSuccess}:ContactProps) => {
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
            <form onSubmit={e => {e.preventDefault(); isSuccess()}}>
                <input  minLength={3} required type="text" placeholder="Имя"/>
                <input  required type="email" placeholder="Почта"/>
                <textarea required className={styles.message} placeholder="Ваше сообщение"/>
                <button>Отправить</button>
            </form>
            </div>
        </div>
        <SignUp isSuccess={isSuccess}/>
    </div>
    )
}

export default Contact;
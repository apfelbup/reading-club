import React from "react";
import styles from "./signup.module.scss";


const SignUp = () => {
    return(
    <div className={styles.signUp}>
        <div className={styles.block}>
            <div className={styles.inner}>
                <h2>Подпишитесь, чтобы всегда быть в курсе</h2>
                <p>Подпишитесь на нашу рассылку два раза в месяц и узнавайте первыми о мероприятиях Booklab, предложениях о членстве и новостях документальной литературы.</p>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Имя" />
                    <input type="text" placeholder="Почта" />
                    <button>Подписаться</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default SignUp;
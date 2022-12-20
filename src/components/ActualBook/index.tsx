import React from "react";
import styles from "./actualbook.module.scss";




const ActualBook = () => {
    return(
        <div className={styles.actualBlock}>
        <div className={styles.currentBook}>
        <img src="./img/content/currentBook.jpg" alt="monthBook" />
        <div className={styles.book}>
            <h4>Книга месяца:</h4>
            <p className={styles.bookName}>Тайная история</p>
            <p className={styles.bookAuthor}>Донна Тартт</p>
            <p className={styles.bookDescription}> Это перевернутая детективная история, рассказанная одним из шести студентов, который много лет спустя размышляет о ситуации, приведшей к убийству их друга.</p>
            <button>Добавить на полку</button>
        </div>
        </div>
    </div>
    )
}

export default ActualBook;
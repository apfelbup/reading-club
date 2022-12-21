import React from "react";
import { useDispatch } from "react-redux";
import styles from "./actualbook.module.scss";
import {addItem} from '../../redux/slices/bookSlice';


const ActualBook = () => {
    const dispatch = useDispatch();

    const onClickadd = () => {
        const book = {
            id:"2",
            image:"https://libroroom.ru/upload/iblock/436/17286.jpg",
            description:"Это перевернутая детективная история, рассказанная одним из шести студентов, который много лет спустя размышляет о ситуации, приведшей к убийству их друга.",
            title:"Тайная история",
            theme:"Драма"
        }
        dispatch(addItem(book));
    }
    return(
        <div className={styles.actualBlock}>
        <div className={styles.currentBook}>
        <img src="./img/content/currentBook.jpg" alt="monthBook" />
        <div className={styles.book}>
            <h4>Книга месяца:</h4>
            <p className={styles.bookName}>Тайная история</p>
            <p className={styles.bookAuthor}>Донна Тартт</p>
            <p className={styles.bookDescription}> Это перевернутая детективная история, рассказанная одним из шести студентов, который много лет спустя размышляет о ситуации, приведшей к убийству их друга.</p>
            <button onClick={onClickadd}>Добавить на полку</button>
        </div>
        </div>
    </div>
    )
}

export default ActualBook;
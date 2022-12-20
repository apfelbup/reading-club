import React from "react";
import styles from "./book.module.scss";
import {useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../redux/slices/bookSlice';



interface BookProps {
    id:string,
    image:string,
    theme:string
    description:string
    title:string
}
const Book = ({id,image,theme,description,title}:BookProps) => {
    const [addBook, setAddBook] = React.useState<boolean>(false);
    const [popup, setPopup] = React.useState<boolean>(false);
    const dispatch = useDispatch();

    const onClickadd = () => {
        setAddBook(true);
        const book = {
            id,
            image,
            description,
            title,
            theme
        }
        dispatch(addItem(book));



    }
    const PopupHandler = () => {
        setPopup(!popup);
    }
    
    return(
    <div className={styles.item}>
        {popup?
        <div >
            <p className={styles.description}>{description}</p>
            <img onClick={onClickadd} className={styles.important} src={addBook?"./img/content/starActive.svg":"./img/content/star.svg"} alt="img" />
            <button onClick={PopupHandler}>Скрыть</button>
        </div> 
        :<div>
            <img src={image} alt="book" />
            <h4 className={styles.theme}>{theme}</h4>
            <img onClick={onClickadd} className={styles.important} src={addBook?"./img/content/starActive.svg":"./img/content/star.svg"} alt="img" />
            <button onClick={PopupHandler}>Подробности</button>
        </div>} 

    </div>
    )
}

export default Book;
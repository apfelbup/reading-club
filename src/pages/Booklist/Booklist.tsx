import React from "react";
import styles from './booklist.module.scss';
import SignUp from "../../components/SignUp";
import ReactPaginate from "react-paginate";
import Pagination from "../../components/Pagination";
import Book from "../../components/Book";
import { title } from "process";
import ActualBook from "../../components/ActualBook";


interface BookListProps {
    dataState:any
}
const Booklist = ({dataState}:BookListProps) => {
    const onChangePage = (number:any) =>{

    }
    return(
    <div className={styles.booklist}>
        <div className={styles.booksBlock}>
        <div className={styles.books}>
            <p>Книги</p>
        </div>
        <div className={styles.booksTitle}>
            <h2>Книги, которые мы:</h2>
            <h3>Прочитали и уже оценили.</h3>
            <h3>Читаем и обсуждаем.</h3>
            <h3>Собираемся читать и изучать.</h3>
        </div>
        </div>
        <ActualBook/>
        <div className={styles.bookitems}>
            {dataState?.map((item: { id: string; theme: string; image: string; description:string; title:string }) => 
            (<Book key={item.id} title={item.title} id={item.id} theme={item.theme} image={item.image} description={item.description}/>))}
        </div>
        <Pagination currentPage={1} onChangePage={onChangePage}/>
        <SignUp/>
    </div>
    )
}

export default Booklist;
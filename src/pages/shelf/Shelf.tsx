import React from "react";
import styles from './shelf.module.scss';
import { useSelector } from "react-redux";
import ShelfItem from "../../components/ShelfItem";


const Shelf:React.FC = () => {
    const {items} = useSelector((state:any)=> state.books);


    return(
    <div className={styles.shelf}>

        { items.length ? 
        items.map((item:{ id: string; theme: string; image: string; description:string; title:string }) => <ShelfItem key={item.id} title={item.title} id={item.id} theme={item.theme} image={item.image} description={item.description}/> )
        : <p className={styles.noBooks}>Вы пока не добавили ни одной книги...</p>}
    </div>
    )
}

export default Shelf;
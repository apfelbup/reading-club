import React from "react";
import styles from "./shelfItem.module.scss";
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/slices/bookSlice';
import {removeItem} from '../../redux/slices/bookSlice';



interface BookProps {
    id:string,
    image:string,
    theme:string
    description:string
    title:string
}
const ShelfItem = ({id,image,theme,description,title}:BookProps) => {

    const dispatch = useDispatch();
    const onClickRemove = (id:any) => {
        dispatch(removeItem(id))
    }
    
    return(
        
    <div className={styles.block}>
            <img src={image} alt="img" height={400}/>
            <div className={styles.info}>
                <div>
                <h4>{title}</h4>
                <p className={styles.theme}>{theme}</p>
                <p>{description}</p>
                </div>
                <button onClick={() => onClickRemove(id)} className={styles.delete}>Убрать с полки</button>
            </div>
    </div>
    )
}

export default ShelfItem;
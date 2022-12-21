import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";


interface HeaderProps {
    popupHandler:()=> void;
}


const Header = ({popupHandler}:HeaderProps) => {
    return(
    <header>
        <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
        <Link className={styles.logo} to="/"><img src="./img/btb-logo-inner.png" style={{height:60}} alt="" /></Link>
            <Link to="/club">О клубе</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/booklist" className={styles.bookMenu}> Книги </Link>

        </nav>
        <div className={styles.shelf}>
            <button onClick={popupHandler} > Присоединиться </button>
            <Link to="/shelf">Моя полка</Link>
            </div>
        </div>
    </header>
    )
}

export default Header;
import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";


interface HeaderProps {
    menuHandler: ()=> void;
    menu: boolean;
}


const Header = ({menuHandler,menu}:HeaderProps) => {
    return(
    <header>
        <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
        <Link className={styles.logo} to="/"><img src="./img/btb-logo-inner.png" style={{height:60}} alt="" /></Link>
            <Link to="/club">О клубе</Link>
            <Link to="/2">Блог</Link>
            <Link to="/shelf">Моя полка</Link>
        </nav>
        <div className={styles.shelf}>
            <button > Присоединиться </button>
            <div className={styles.bookMenu}> <p onClick={menuHandler}> Найти книгу</p> <img src="./img/content/arrow.svg" alt="arrow-down" /></div>
            {menu?
                        <ul>
                        <Link to="/booklist">Наш топ года</Link>
                        <Link to="/booklist">Художественный топ</Link>
                        <Link to="/booklist">Психологический топ</Link>
                        <Link to="/booklist">Все книги</Link>
                    </ul>
            :null}

            </div>
        </div>
    </header>
    )
}

export default Header;
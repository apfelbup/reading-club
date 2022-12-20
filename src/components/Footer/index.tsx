import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";


const Footer = (windowScroll:any) => {
    return(
    <footer className={styles.footer}>
        <div className={styles.block}>
            <ul>
                <li><Link to ="/" onClick={() => window.scrollTo(0, 0)}>Главная страница</Link></li>
                <li><Link to ="/booklist" onClick={() => window.scrollTo(0, 0)}>Книги</Link></li>
                <li><Link to ="/blog" onClick={() => window.scrollTo(0, 0)}>Блог</Link></li>
            </ul>
            <ul>
                <li><Link to ="/contact" onClick={() => window.scrollTo(0, 0)}>Контакты</Link></li>
                <li><Link to ="/club" onClick={() => window.scrollTo(0, 0)}>Присоединиться к клубу</Link></li>
            </ul>

        </div>
        <p> Booklab Book Club Ltd © 2021 - 2023</p>
    </footer>
    )
}

export default Footer;
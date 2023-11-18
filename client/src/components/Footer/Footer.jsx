import styles from './Footer.module.css';
export default function Footer(){
    return (
        <footer className={styles.footer}>

        <ul>
            <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>

        </ul>
        <p>&copy; 2023 Dafy Yasenova. All Rights Reserved.</p>
      
    </footer>
    )
}
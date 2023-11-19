import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope } from '@fortawesome/free-regular-svg-icons'


export default function Footer() {
    return (
        <footer className={styles.footer}>

            <ul>

                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faGithub} /> </li>
                <li><FontAwesomeIcon icon={faEnvelope} /> </li>

            </ul>
            <p>&copy; 2023 Dafy Yasenova. All Rights Reserved.</p>

        </footer>
    )
}
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { Link } from 'react-router-dom' 
export default function Footer() {
    return (
        <footer className={styles.footer}>

            <ul>

                 {/* <li><Link to="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></Link></li> */}
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faGithub} /> </li>
                <li><Link to="/contact-us" ><FontAwesomeIcon icon={faEnvelope} /> </Link></li>

            </ul>
            <p>&copy; {new Date().getFullYear()} Dafy Yasenova. All Rights Reserved.</p>

        </footer>
    )
}
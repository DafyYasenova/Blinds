import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { Link } from 'react-router-dom' 
export default function Footer() {
    return (
        <footer className={styles.footer}>

            <ul>
                 <li><Link to="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                <li><Link to="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                <li><Link to="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                <li><Link to="https://github.com/DafyYasenova" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link></li>
                <li><Link to="/contact-us" ><FontAwesomeIcon icon={faEnvelope} /> </Link></li>
            </ul>
            <p>&copy; 2023 Dafy Yasenova. All Rights Reserved.</p>

        </footer>
    )
}
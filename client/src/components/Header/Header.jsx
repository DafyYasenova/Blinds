import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <div>
            <header>
                <section className={styles.navigation}>
                    <p><img src="/Images/blinds-logo.png" height="38px" /> <Link to="/"><span>BLINDS</span></Link></p>
                    <nav>
                        <ul>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/catalog">CATALOG</Link></li>
                            {isAuthenticated && (
                                <>
                                    <li><Link to="/create">CREATE</Link></li>
                                    <li><Link to="/logout">LOGOUT</Link></li>
                                    <li><Link to="/search">SEARCH</Link></li>
                                </>
                            )}

                            {!isAuthenticated && (
                                <>
                                    <li><Link to="/login">LOGIN</Link></li>
                                    <li><Link to="/register">REGISTER</Link></li>
                                </>
                            )}


                        </ul>
                    </nav>
                </section>
            </header>
        </div>
    )
}
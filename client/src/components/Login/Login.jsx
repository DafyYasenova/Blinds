import styles from './Login.module.css';
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <section id="login">
            <div className={styles.form}>
                <h2>LOGIN</h2>
                <form  className={styles["login-form"]}>
                    <input type="text" name="email" id="login-email" placeholder="email" />
                    <input type="password" name="password" id="login-password" placeholder="password" />

                    <button type="submit">login</button>
                    <p className={styles.message}>Not registered? <Link to="/register">Register now</Link></p>
                </form>
            </div>
        </section>
    )
}
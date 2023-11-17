import styles from './Register.module.css';
import { Link} from 'react-router-dom';
export default function Register(){
    return (
        <section id="register">
            <div className={styles.form}>
                <h2>REGISTER</h2>
                <form className={styles["register-form"]} >
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p className={styles.message}>Already registered? <Link to="/login">Login now</Link></p>
                </form>
            </div>
        </section>
    )
}
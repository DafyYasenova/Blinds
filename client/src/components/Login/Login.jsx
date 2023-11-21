import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import styles from './Login.module.css';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';


const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}
export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <section id="login">
            <div className={styles.form}>
                <h2>LOGIN</h2>
                <form className={styles["login-form"]} onSubmit={onSubmit}>
                    <input type="email" name="email" id="login-email" placeholder="email" onChange={onChange} value={values[LoginFormKeys.Email]} />
                    <input type="password" name="password" id="login-password" placeholder="password" onChange={onChange} value={values[LoginFormKeys.Password]} />

                    <button type="submit">login</button>
                    <p className={styles.message}>Not registered? <Link to="/register">Register now</Link></p>
                </form>
            </div>
        </section>
    )
}
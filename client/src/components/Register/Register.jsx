import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

import styles from './Register.module.css';
import { Link } from 'react-router-dom';

const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    RePassword: 're-password',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm( {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RePassword]: '',
    },registerSubmitHandler)
    return (
        <section id="register">
            <div className={styles.form}>
                <h2>REGISTER</h2>
                <form className={styles["register-form"]} onSubmit={onSubmit} >
                    <input
                        type="email"
                        name="email"
                        id="register-email"
                        placeholder="email"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]} />

                    <input
                        type="text"
                        name="username"
                        id="register-username"
                        placeholder="username"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Username]} />

                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]} />

                    <input
                        type="password"
                        name="re-password"
                        id="repeat-password"
                        placeholder="repeat password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.RePassword]} />

                    <button type="submit">register</button>
                    <p className={styles.message}>Already registered? <Link to="/login">Login now</Link></p>
                </form>
            </div>
        </section>
    )
}
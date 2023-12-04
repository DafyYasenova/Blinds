import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import styles from './Login.module.css';
import { useContext } from 'react';
import AuthContext, { useAuthContext } from '../../contexts/authContext';


const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}
export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { errors } = useAuthContext();

    const { values, onChange, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, loginSubmitHandler);


    return (
        <section id="login">
            <div className={styles.form}>
                <h2>LOGIN</h2>
                <form className={styles["login-form"]} onSubmit={onSubmit}>

                    <input type="email" name="email" id="login-email" placeholder="email" onChange={onChange} value={values[LoginFormKeys.Email]} />
                    {errors.email && <p className={styles["error-message"]}>Email is not valid!</p>}

                    <input type="password" name="password" id="login-password" placeholder="password" onChange={onChange} value={values[LoginFormKeys.Password]} />
                    {errors.password && <p className={styles["error-message"]}>Password too short!</p>}

                    <button type="submit">login</button>
                    
                    <p className={styles.message}>Not registered? <Link to="/register">Register now</Link></p>
                </form>
            </div>
        </section>
    )
}
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import styles from './Login.module.css';
import './login-error.css';

import { useContext } from 'react';
import AuthContext, { useAuthContext } from '../../contexts/authContext';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}
export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { errors,errorMessage } = useAuthContext();

    const { values, onChange, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, loginSubmitHandler);


    return (
        <section id="login">
            <div className={styles.form}>
                <h2>LOGIN</h2>
                <form className={styles["login-form"]} onSubmit={onSubmit}>

                    <input type="email" className={ errors.email ? "error-login" : ""} name="email" id="login-email" placeholder="email" onChange={onChange} value={values[LoginFormKeys.Email]} />
                  
                  
                    <input type="password" className={ errors.password ? "error-login" : ""} name="password" id="login-password" placeholder="password" onChange={onChange} value={values[LoginFormKeys.Password]} />
                    

                    <button type="submit">login</button>
                    
                    <p className={styles.message}>Not registered? <Link to="/register">Register now</Link></p>
                </form>
                {errorMessage.length>0  && (
                    <div className={`error-message ${errorMessage && 'show-error custom-style'}`}>
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
           
        </section>
    )
}
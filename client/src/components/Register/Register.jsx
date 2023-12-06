import { useContext } from 'react';
import AuthContext, { useAuthContext } from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import './register.css';

import styles from './Register.module.css';
import { Link } from 'react-router-dom';

export default function Register() {
    const { errorsRegister, errorMessage } = useAuthContext()
    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm({
        email: "",
        username: "",
        password: "",
        confirmPassword: '',
    }, registerSubmitHandler);

    return (
        <section id="register">
            <div className={styles.form}>
                <h2>REGISTER</h2>

                <form className={styles["register-form"]} onSubmit={onSubmit}>

                    <input type="email" className={errorsRegister.email ? "error-register" : ""} name="email" id="register-email" placeholder="email" onChange={onChange} value={values.email} />

                    <input type="text" className={errorsRegister.username ? "error-register" : ""} name="username" id="register-username" placeholder="username" onChange={onChange} value={values.username} />

                    <input type="password" className={errorsRegister.password ? "error-register" : ""} name="password" id="register-password" placeholder="password" onChange={onChange} value={values.password} />

                    <input type="password" className={errorsRegister.repeat ? "error-register" : ""} name="confirmPassword" id="register-confirmPassword" placeholder="confirm password " onChange={onChange} values={values.confirmPassword} />

                    <button type="submit">Register</button>

                    <p className={styles.message}>Not registered? <Link to="/login">Login now</Link></p>
                </form>

                {errorMessage.length > 0 && (
                    <div className={`error-message ${errorMessage && 'show-error custom-style'}`}>
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
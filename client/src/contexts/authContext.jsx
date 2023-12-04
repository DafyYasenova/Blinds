
import { createContext, useContext, useState } from "react";
import * as authService from '../services/authService'
import { useNavigate } from 'react-router-dom'
import usePersistedState from "../hooks/usePersistedState";



const AuthContext = createContext();

export const AuthProvider = ({
  children,

}) => {
  const [errors, setErrors] = useState({ email: false, password: false });
  const navigate = useNavigate();

  const [auth, setAuth] = usePersistedState('auth', {});

  const onBlur = (values) => {

    if (values.email.length < 9) {

      setErrors(prevErrors => ({ ...prevErrors, email: true }));

      setTimeout(() => {
        setErrors((prevErrors) =>
          ({ ...prevErrors, email: false }))
      }, 2000)
      return;

    } else {
      setErrors(prevErrors => ({ ...prevErrors, email: false }));
    }

    if (values.password.length < 6) {

      setErrors(prevErrors => ({ ...prevErrors, password: true }));
      return;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, password: false }));
    }



  }


  const loginSubmitHandler = async (values) => {
    try {
      onBlur(values)
      const result = await authService.login(values.email, values.password);
      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);
      navigate('/');
    } catch (error) {
      return error
    }
  };

  const registerSubmitHandler = async (values) => {

    const result = await authService.register(values.email, values.password, values.username)
    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);
    navigate('/');
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');

  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
    errors
  };
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}


export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

export default AuthContext;
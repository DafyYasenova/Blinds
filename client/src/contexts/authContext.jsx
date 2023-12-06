
import { createContext, useContext, useState } from "react";
import * as authService from '../services/authService'
import { useNavigate } from 'react-router-dom'
import usePersistedState from "../hooks/usePersistedState";


const AuthContext = createContext();

export const AuthProvider = ({
  children,

}) => {
  const [errors, setErrors] = useState({ email: false, password: false, });
  const [errorsRegister, setErrorRegister] = useState({ email: false, password: false, repeat: false, username: false });
  const [errorMessage, setErrorMessage] = useState("")
 
  const navigate = useNavigate();

  const [auth, setAuth] = usePersistedState('auth', {});


  const validate = (values) => { 
    if (!values.password && !values.email && !values.repeat && !values.username) {
      setErrorMessage("Some field is empty")
      setErrors(prevErrors => ({ ...prevErrors, password: true, email: true }));
      setTimeout(() => {
        setErrorMessage('')
        setErrors((prevErrors) =>
          ({ ...prevErrors, password: false, email: false, repeat: false, username: false }))
      }, 2000)
      throw new Error;
    }
    if (!values.email) {
      setErrors((prevErrors) =>
        ({ ...prevErrors, email: true }))
      setErrorMessage("Some field is empty")

      setTimeout(() => {
        setErrors((prevErrors) =>
          ({ ...prevErrors, email: false }))
        setErrorMessage('')
      }, 2000)
      throw new Error;
    }

    if (values.email.length < 9) {

      setErrors((prevErrors) =>
        ({ ...prevErrors, email: true }))

      setErrorMessage("Minimum length is 9 characters")
      setTimeout(() => {
        setErrors((prevErrors) =>
          ({ ...prevErrors, email: false }))
        setErrorMessage('')
      }, 2000)
      throw new Error;

    }
    if (!values.password) {
      setErrorMessage("Some field is empty")
      setErrors(prevErrors => ({ ...prevErrors, password: true }));
      setTimeout(() => {
        setErrorMessage('')
        setErrors((prevErrors) =>
          ({ ...prevErrors, password: false }))
      }, 2000)
      throw new Error;
    }
    if (values.password.length < 6) {
      setErrorMessage("Minimum length is 6 characters")
      setErrors(prevErrors => ({ ...prevErrors, password: true }));

      setTimeout(() => {
        setErrorMessage('')
        setErrors((prevErrors) =>
          ({ ...prevErrors, password: false }))
      }, 2000)
      throw new Error;
    }

  };

  const validateRegister = (values,confirmPassword) => {
    if (!values.email) {
      setErrorRegister((prevErrors) =>
        ({ ...prevErrors, email: true }))
      setErrorMessage("Some field is empty")

      setTimeout(() => {
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, email: false }))
        setErrorMessage('')
      }, 2000)

    throw new Error;
    } 
    if (values.email.length < 9) {

      setErrorRegister((prevErrors) =>
        ({ ...prevErrors, email: true }))

      setErrorMessage("Minimum length is 9 characters")
      setTimeout(() => {
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, email: false }))
        setErrorMessage('')
      }, 2000)
      throw new Error;

    }
    if (!values.username) {
      setErrorRegister((prevErrors) =>
        ({ ...prevErrors, username: true }))
      setErrorMessage("Some field is empty")


      setTimeout(() => {
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, username: false }))
        setErrorMessage('')
      }, 2000)
      throw new Error;
    }
    if (values.username.length < 3 || values.username.length > 20) {

      setErrorRegister((prevErrors) =>
        ({ ...prevErrors, username: true }))

      setErrorMessage("Minimum length is 3 characters")
      setTimeout(() => {
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, username: false }))
        setErrorMessage('')
      }, 2000)
      throw new Error;

    }
   
    if (!values.password) {
      setErrorMessage("Some field is empty")
      setErrorRegister(prevErrors => ({ ...prevErrors, password: true }));
      setTimeout(() => {
        setErrorMessage('')
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, password: false }))
      }, 2000)
      throw new Error;
    }
    if (values.password!==confirmPassword) {
      setErrorMessage("Please entry correct password")
      setErrorRegister(prevErrors => ({ ...prevErrors, password: true }));
      setTimeout(() => {
        setErrorMessage('')
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, password: false }))
      }, 2000)
      throw new Error;
    }
    if (values.password.length < 6) {
      setErrorMessage("Minimum length is 6 characters")
      setErrorRegister(prevErrors => ({ ...prevErrors, password: true }));

      setTimeout(() => {
        setErrorMessage('')
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, password: false }))
      }, 2000)
      throw new Error;
    }
    if (confirmPassword.length < 6) {
      setErrorRegister((prevErrors) =>
        ({ ...prevErrors, repeat: true }))
      setErrorMessage("Minimum length is 6 characters")

      setTimeout(() => {
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, repeat: false }))
        setErrorMessage('')
      }, 2000)
      throw new Error;
    }

    if (!confirmPassword) {
      setErrorRegister((prevErrors) =>
        ({ ...prevErrors, repeat: true }))
      setErrorMessage("Some field is empty")

      setTimeout(() => {
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, repeat: false }))
        setErrorMessage('')
      }, 2000)
      throw new Error;
    }


    if (!values.password && !values.email && !values.repeat && !values.username) { 
      setErrorMessage("Some field is empty")
      setErrorRegister(prevErrors => ({ ...prevErrors, password: true, email: true, repeat: true, username: true }));
      setTimeout(() => {
        setErrorMessage('')
        setErrorRegister((prevErrors) =>
          ({ ...prevErrors, password: false, email: false, repeat: false, username: false }))
      }, 2000)
      throw new Error;
    }

  }

  const loginSubmitHandler = async (values) => {
    const trimmedRegisterData = {};
    Object.keys(values).forEach(key => {
        trimmedRegisterData[key] = values[key].trim();
    });
    try {

      validate(values)
      const result = await authService.login(trimmedRegisterData.email, trimmedRegisterData.password);
      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);
      navigate('/');

    } catch (error) {
      return error
    }
  };

  const registerSubmitHandler = async (values) => {
    const { confirmPassword, ...registerData } = values;

    const trimmedRegisterData = {};

    Object.keys(registerData).forEach(key => {
        trimmedRegisterData[key] = registerData[key].trim();
    });

  try{
  
    validateRegister(trimmedRegisterData,confirmPassword)

    const result = await authService.register(trimmedRegisterData.email, trimmedRegisterData.password, trimmedRegisterData.username)
    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);
    navigate('/');
  }catch (error) {
    return error;
  }
 
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
    errors,
    errorMessage,
    errorsRegister

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
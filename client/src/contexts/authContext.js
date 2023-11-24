import { createContext } from "react";

const AuthContext = createContext();


export const AuthProvider = ({
    children,
    values 
}) => {
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
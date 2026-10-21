import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("userData")
        return savedUser ? JSON.parse(savedUser) : null;
    });


    const login = () => {
        const userData = {
            name: "sakshi",
            role: "FrontEnd Developer"
        }
        localStorage.setItem("userData", JSON.stringify(userData));
        setUser(userData);

    };
    const logout = () => {

        localStorage.removeItem('userData');
        setUser(null)
    }

    return (
        <>
            <AuthContext.Provider value={{ user, setUser, login, logout }} >{children}</AuthContext.Provider>
        </>
    )
}
export default AuthProvider;
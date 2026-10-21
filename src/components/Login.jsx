import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Login() {
    const { user, login, logout } = useContext(AuthContext)
    console.log(user);



    return (
        <>
            <h1>Login Page</h1>

            {user ? (
                <>
                    <h2>Welcome,{user?.name}</h2>
                    <p>{user?.role}</p>
                    <button onClick={logout}>Logout</button>
                </>

            ) : (
                <>
<h2>You are not Logged in</h2>
                <button onClick={login}>Login</button>
                </>
            )
            }

        </>











    )
}
export default Login
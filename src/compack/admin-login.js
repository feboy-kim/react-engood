import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { setToken } from "../helper/item-storage"
import LoginForm from "./login-form"

function AdminLogin() {
    const [error, setError] = useState(null)
    const navig = useNavigate()
    function onSignIn(signed) {
        if (signed) {
            setToken(signed.token)
            navig("/")
        } else {
            setError('Authentication failed')
        }
    }
    return (
        <div>
            <LoginForm onLogin={onSignIn} />
            <Link to="/">取消</Link>
            {error && <p title="failure">{error.toString()}</p>}
        </div>
    )
}

export default AdminLogin

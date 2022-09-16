import { useState } from "react"
import { restLoginCredential } from "../helper/rest-fetcher"
import PropTypes from 'prop-types'

function LoginForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const unChanged = ev => {
        setUsername(ev.target.value)
    }
    const pwChanged = ev => {
        setPassword(ev.target.value)
    }
    function isInvalid() {
        return username.length < 2 || password.length < 5
    }
    const [signing, setSigning] = useState(false)
    async function onSignIn() {
        setSigning(true)
        onLogin(await restLoginCredential(username, password))
        setSigning(false)
    }
    return(
        <>
            <p>登录</p>
            <div>
                <label htmlFor="un">户名</label>
                <input type="text" id="un" value={username} onChange={unChanged} disabled={signing} />
            </div>
            <div>
                <label htmlFor="pw">密码</label>
                <input type="password" id="pw" value={password} onChange={pwChanged} disabled={signing} />
            </div>
            <button title="sign" onClick={onSignIn} disabled={isInvalid() || signing}>提交</button>
        </>
    )
}

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired
}

export default LoginForm

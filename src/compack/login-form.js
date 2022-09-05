import { useState } from "react"
import { restPostCredential } from "../helper/rest-fetcher"
import PropTypes from 'prop-types'

function LoginForm({onSubmitted}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const unameChanged = ev => {
        setUsername(ev.target.value)
    }
    const pwordChanged = ev => {
        setPassword(ev.target.value)
    }
    function isInvalid() {
        return username.length < 2 || password.length < 5
    }
    const [submitting, setSubmitting] = useState(false)
    async function onSubmit() {
        setSubmitting(true)
        onSubmitted(await restPostCredential(username, password))
        setSubmitting(false)
    }
    return(
        <>
            <p>登录</p>
            <div>
                <label htmlFor="un">户名</label>
                <input type="text" id="un" value={username} onChange={unameChanged} disabled={submitting} />
            </div>
            <div>
                <label htmlFor="pw">密码</label>
                <input type="text" id="pw" value={password} onChange={pwordChanged} disabled={submitting} />
            </div>
            <button title="submit" onClick={onSubmit} disabled={isInvalid() || submitting}>提交</button>
        </>
    )
}

LoginForm.propTypes = {
    onSubmitted: PropTypes.func.isRequired
}

export default LoginForm

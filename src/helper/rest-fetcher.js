import { getToken } from "./item-storage"

export const restBase = process.env.REACT_APP_REST_BASE || "http://localhost:21323"

export const restGetWordefins = async (initial, tailine) => {
    const url = `${restBase}/${initial}/${tailine}/words`
    const resp = await fetch(url)
    if (resp.ok) {
        return { err: null, wds: await resp.json() }
    } else {
        return { err: new Error('Getting wordefins failed'), wds: null }
    }
}

export const restPostWordefin = async (wordefin, id) => {
    const url = id && id > 0 ? `${restBase}/my/words/${id}` : `${restBase}/my/words`
    const token = getToken()
    if (!token) return false
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(wordefin)
    })
    return resp.ok
}

export const restPostCredential = async (un, pw) => {
    const url = `${restBase}/login`
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            username: un,
            password: pw
        })
    })
    if (resp.ok) {
        return await resp.json()
    } else {
        return null
    }
}
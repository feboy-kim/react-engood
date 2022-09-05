export function setObject(k, v) {
    if (v instanceof Object) {
        sessionStorage.setItem(k, JSON.stringify(v))
        return true
    } else {
        return false
    }
}

export function getObject(k) {
   const v = sessionStorage.getItem(k)
   if (v) return JSON.parse(v)
   else return null
}

export function setToken(v) {
    if (typeof v === 'string') {
        sessionStorage.setItem("token", v)
        return true
    } else {
        return false
    }
}

export function getToken() {
   const v = sessionStorage.getItem("token")
   if (v) return v
   else return null
}

import { useEffect, useState } from "react"
import { restBase } from '../helper/rest-helper'
import DeleConfirm from "./dele-confirm"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"

function WordefinList({ kws }) {
    const [wds, setWds] = useState(null)
    const [err, setErr] = useState(null)
    const [heading, setHeading] = useState("")
    useEffect(() => {
        if (kws) {
            const initial = kws.initial
            const tailine = kws.tailine
            let url = ""
            if (initial.length >= 1) {
                if (tailine.length >= 1) {
                    setHeading(`Initial: ${initial} and Tailine: ${tailine}`)
                } else {
                    setHeading(`Initial: ${initial}`)
                }
            } else {
                if (tailine.length >= 1) {
                    setHeading(`Tailine: ${tailine}`)
                } else {
                    setHeading("")
                }
            }
            url = `${restBase}/${initial}/${tailine}/words`
            if (url.length > restBase.length) {
                fetch(url, {
                    method: 'GET'
                }).then(resp => {
                    if (!resp.ok) {
                        throw new Error('Getting wordefins failed')
                    }
                    return resp.json()
                }).then(data => setWds(data)).catch(error => setErr(error))
            }
        }
    }, [kws])
    const [wordefin, setWordefin] = useState(null)
    function handleConfirmed(yes) {
        if (yes) {
            const index = wds.findIndex(w => w.id === wordefin.id)
            if (index >= 0) {
                let cloned = [...wds]
                cloned.splice(index, 1)
                setWds(cloned)
            }
        }
        setWordefin(null)
    }
    const navig = useNavigate()
    function handleModifying(wd) {
        sessionStorage.setItem('' + wd.id, JSON.stringify({w: wd.word, d: wd.defin}))
        navig(`wd/${wd.id}`)
    }
    return (
        <>
            <h4>{heading}</h4>
            {wds && <ul>
                {wds.map(wd => <li key={wd.id}>
                    <span>{wd.word}</span>
                    {' '}
                    <span>{wd.defin}</span>
                    {' '}
                    {/* <Link to={`wd/${wd.id}`}>修改</Link> */}
                    <button onClick={() => handleModifying(wd)}>修改</button>
                    <button onClick={() => setWordefin(wd)}>删除</button>
                </li>)}
            </ul>}
            {err && <p>{err.toString()}</p>}
            <DeleConfirm wd={wordefin} confirmed={handleConfirmed} />
        </>
    )
}

WordefinList.propTypes = {
    kws: PropTypes.object
}

export default WordefinList

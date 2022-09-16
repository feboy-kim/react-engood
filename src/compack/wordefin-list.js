import { useEffect, useState } from "react"
import { restGetWordefins } from '../helper/rest-fetcher'
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
            if (initial.length >= 1) {
                if (tailine.length >= 1) {
                    setHeading(`首字母: ${initial} 尾字母: ${tailine}`)
                } else {
                    setHeading(`首字母: ${initial}`)
                }
            } else {
                if (tailine.length >= 1) {
                    setHeading(`尾字母: ${tailine}`)
                } else {
                    setHeading("")
                }
            }
            restGetWordefins(initial, tailine).then(gotten => {
                if (gotten.err) {
                    setErr(gotten.err)
                } else {
                    setWds(gotten.wds)
                }
            })
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
    function handleModify(wd) {
        sessionStorage.setItem('' + wd.id, JSON.stringify({ w: wd.word, d: wd.defin }))
        navig(`wd/${wd.id}`)
    }
    return (
        <>
            <h4 id="initial-tailine">检索结果（{heading}）</h4>
            {wds && <ul>
                {wds.map(wd => <li key={wd.id}>
                    <span>{wd.word}</span>
                    {' '}
                    <span>{wd.defin}</span>
                    {' '}
                    <button onClick={() => handleModify(wd)}>修改</button>
                    <button onClick={() => setWordefin(wd)}>删除</button>
                </li>)}
            </ul>}
            {err && <p title="failure">{err.toString()}</p>}
            <DeleConfirm wd={wordefin} confirmed={handleConfirmed} />
        </>
    )
}

WordefinList.propTypes = {
    kws: PropTypes.object
}

export default WordefinList

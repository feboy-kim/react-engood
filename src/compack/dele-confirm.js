import { useEffect, useRef, useState } from "react"
import { restBase } from '../helper/rest-helper'
import PropTypes from 'prop-types'

function DeleConfirm({ wd, confirmed }) {
    const dialogRef = useRef(null)
    useEffect(() => {
        if (wd) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [wd])
    const [err, setErr] = useState(null)
    function handleDelete() {
        fetch(`${restBase}/my/words/${wd.id}`, {
            method: 'DELETE'
        }).then(resp => {
            if (resp.ok) {
                confirmed(true)
            } else {
                throw new Error('Deleting wordefins failed')
            }
        }).catch(error => setErr(error))
    }
    return (
        <>
            <dialog ref={dialogRef}>
                {wd && <label> `需要删除《${wd.word}》吗？`</label>}
                <div>
                    <button onClick={() => confirmed(false)}>取消</button>
                    <button onClick={handleDelete}>确定</button>
                </div>
                {err && <p>{err.toString()}</p>}
            </dialog>
        </>
    )
}

DeleConfirm.propTypes = {
    wd: PropTypes.object,
    confirmed: PropTypes.func.isRequired
}

export default DeleConfirm

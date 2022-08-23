import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { restBase } from '../helper/rest-helper'

function WordefinEdit() {
    let { id } = useParams()
    const [word, setWord] = useState("")
    const [defin, setDefin] = useState("")
    const wordChanged = ev => {
        setWord(ev.target.value)
    }
    const definChanged = ev => {
        setDefin(ev.target.value)
    }
    function isInvalid() {
        return word.length < 2 || defin.length < 2
    }
    const [error, setError] = useState(null)
    useEffect(() => {
        if (id > 0) {
            fetch(`${restBase}/words/${id}`).then(resp => {
                if (!resp.ok) {
                    throw new Error('Getting wordefins failed')
                }
                return resp.json()
            }).then(wd => {
                setWord(wd.word)
                setDefin(wd.defin)
            }).catch(ex => setError(ex))
        }
    }, [id])
    const navig = useNavigate()
    const submit = async () => {
        let url = `${restBase}/my/words`
        if (id > 0) {
            url = url + `/${id}`
        }
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ word, defin })
        })
        if (resp.ok) {
            navig("/")
        } else {
            setError(new Error("Posting wordefin failed"))
        }
    }
    return (
        <>
            <p>编辑单词</p>
            <div>
                <label htmlFor="word">Word</label>
                <input type="text" id="word" value={word} onChange={wordChanged} />
            </div>
            <div>
                <label htmlFor="defin">Defin</label>
                <textarea id="defin" rows={3} value={defin} onChange={definChanged} />
            </div>
            <button onClick={submit} disabled={isInvalid()}>保存</button>
            <Link to="/">取消</Link>
            {error && <p>{error.toString()}</p>}
        </>
    )
}

export default WordefinEdit

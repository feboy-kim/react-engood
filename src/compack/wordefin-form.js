import { useEffect, useState } from "react";
import { restPostWordefin } from '../helper/rest-fetcher'

function WordefinForm({ onSaved, wId, getOriginal }) {
    const [word, setWord] = useState("")
    const [defin, setDefin] = useState("")
    const [orig, setOrig] = useState(null)
    const wordChanged = ev => {
        setWord(ev.target.value)
    }
    const definChanged = ev => {
        setDefin(ev.target.value)
    }
    function isInvalid() {
        const invalid = word.length < 2 || defin.length < 2
        if (orig) return invalid || (word === orig.w && defin === orig.d)
        else return invalid
    }
    useEffect(() => {
        if (wId && getOriginal) {
            const wd = getOriginal(wId)
            if (wd) {
                setOrig(wd)
                if (wd) {
                    setWord(wd.w)
                    setDefin(wd.d)
                }
            }
        }
    }, [wId, getOriginal])
    const [saving, setSaving] = useState(false)
    const save = async () => {
        setSaving(true)
        onSaved(await restPostWordefin({ word, defin }, wId))
        setSaving(false)
    }
    return (
        <div id="wordefin">
            <p>编辑单词</p>
            <div>
                <label htmlFor="word">单词</label>
                <input type="text" id="word" value={word} onChange={wordChanged} disabled={saving} />
            </div>
            <div>
                <label htmlFor="defin">释义</label>
                <textarea id="defin" rows={3} value={defin} onChange={definChanged} disabled={saving} />
            </div>
            <button title="save" onClick={save} disabled={isInvalid() || saving}>保存</button>
        </div>
    )
}

export default WordefinForm

import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getObject } from "../helper/item-storage"
import WordefinForm from "./wordefin-form"

function WordefinEdit() {
    let { id } = useParams()
    const [error, setError] = useState(null)
    const navig = useNavigate()
    function onSaved(yes) {
        if (yes) {
            navig("/")
        } else {
            setError(new Error("Posting wordefin failed"))
        }
    }
    return (
        <>
            <WordefinForm onSaved={onSaved} wId={id} getOriginal={getObject} />
            <Link to="/">取消</Link>
            {error && <p title="failure">{error.toString()}</p>}
        </>
    )
}

export default WordefinEdit

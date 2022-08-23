import { useState } from "react";
import PropTypes from 'prop-types'

function SearchingBar({ kwSelected }) {
    const [initial, setInitial] = useState("")
    const [tailine, setTailine] = useState("")
    const onInitial = ev => {
        setInitial(ev.target.value)
    }
    const onTailine = ev => {
        setTailine(ev.target.value)
    }
    const handleClick = () => {
        kwSelected(initial, tailine)
        setInitial("")
        setTailine("")
    }
    return (
        <>
            <div>
                <label htmlFor="initial">首字符</label>
                <input type="text" id="initial" placeholder="at least 2 characters" required value={initial} onChange={onInitial} />
            </div>
            <div>
                <label htmlFor="tailine">尾字符</label>
                <input type="text" id="tailine" placeholder="at least 2 characters" required value={tailine} onChange={onTailine} />
            </div>
            <div>
                <button disabled={initial.length < 1 && tailine.length < 1} onClick={handleClick}>
                    Search
                </button>
            </div>
        </>
    )
}

SearchingBar.propTypes = {
    kwSelected: PropTypes.func.isRequired
}

export default SearchingBar

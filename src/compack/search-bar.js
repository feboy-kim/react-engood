import { useState } from "react";
import PropTypes from 'prop-types'

function SearchBar({ kwSelected }) {
    const [initial, setInitial] = useState("")
    const [tailine, setTailine] = useState("")
    const onInitial = ev => {
        setInitial(ev.target.value)
    }
    const onTailine = ev => {
        setTailine(ev.target.value)
    }
    const handleSearch = () => {
        kwSelected(initial, tailine)
        setInitial("")
        setTailine("")
    }
    return (
        <div className="flex space-x-3">
            <div className="columns-1 md:columns-2 gap-2">
                <div className="mx-1">
                    <label htmlFor="initial" className="mx-1">首字母</label>
                    <input type="text" id="initial"  className="text-gray-800 px-2 w-20"
                        placeholder="英文字符" value={initial} onChange={onInitial} />
                </div>
                <div className="mx-1">
                    <label htmlFor="tailine" className="mx-1">尾字母</label>
                    <input type="text" id="tailine" className="text-gray-800 px-2 w-20"
                        placeholder="英文字符" value={tailine} onChange={onTailine} />
                </div>
            </div>
            <div>
                <button title="search" disabled={initial.length < 1 && tailine.length < 1} onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    kwSelected: PropTypes.func.isRequired
}

export default SearchBar

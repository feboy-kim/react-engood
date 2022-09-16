import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search-bar";
import WordefinList from "./wordefin-list";

function MasterHome() {
  const [keyWords, setKeywords] = useState(null)
  const kwSelected = (initial, tailine) => {
    setKeywords({ initial, tailine })
  }
  return (
    <div className="w-full h-full">
      <SearchBar kwSelected={kwSelected} />
      {keyWords && <WordefinList kws={keyWords} />}
      <Link to="wd/0">新建</Link>
      <Link to="/login" className="right-1 bottom-1">登录</Link>
    </div>
  );
}

export default MasterHome;

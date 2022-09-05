import { useState } from "react";
import { Link } from "react-router-dom";
import SearchingBar from "./searching-bar";
import WordefinList from "./wordefin-list";

function MasterHome() {
  const [keyWords, setKeywords] = useState(null)
  const kwSelected = (initial, tailine) => {
    setKeywords({ initial, tailine })
  }
  return (
    <>
      <SearchingBar kwSelected={kwSelected} />
      {keyWords && <WordefinList kws={keyWords} />}
      <Link to="wd/0">新建</Link>
      <Link to="/login">登录</Link>
    </>
  );
}

export default MasterHome;

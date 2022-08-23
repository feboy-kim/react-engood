import { Route, Routes } from "react-router-dom";
import MasterHome from "./compack/master-home";
import WordefinEdit from "./compack/wordefin-edit";

function App() {
  return (
    <div className="App">
      <h1>英文单词首尾检索</h1>
      <Routes>
        <Route path="/" element={<MasterHome />}></Route>
        <Route path="wd/:id" element={<WordefinEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;

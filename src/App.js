import { Route, Routes } from "react-router-dom";
import AdminLogin from "./compack/admin-login";
import MasterHome from "./compack/master-home";
import WordefinEdit from "./compack/wordefin-edit";
import './App.css';

function App() {
  return (
    <div className="primary-bg-and-text centered-container">
      <h1 className="text-3xl font-bold ">首尾检索英文单词</h1>
      <Routes>
        <Route path="/" element={<MasterHome />}></Route>
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="wd/:id" element={<WordefinEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;

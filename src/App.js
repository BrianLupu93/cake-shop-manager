import "./assets/css/style.css";
import "./assets/mdi/css/materialdesignicons.min.css";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./MainContainer";
import Login from "./components/Log-In-Out/Login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<MainContainer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

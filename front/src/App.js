import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/header/Container";
import FooterContainer from "./components/footer/Container";

function App() {
  return (
    <div className="App">
      <div className="App_innerBox">
        <Routes>
          {/* 헤더 */}
          <Route path="/*" element={<HeaderContainer />}></Route>
        </Routes>
        <Routes>{/*  */}</Routes>

        <Routes>
          {/* 푸터 */}
          <Route path="/*" element={<FooterContainer />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

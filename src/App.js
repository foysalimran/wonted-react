import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/margins-paddings.css";
import Version01 from "./components/pages/version-01";
import Version02 from "./components/pages/version-01";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Version01 />} />
        <Route path="home" element={<Version01 />} />
        <Route path="/version-02" element={<Version02 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

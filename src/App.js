import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/margins-paddings.css";
import Version01 from "./components/pages/version-01";
import Version02 from "./components/pages/version-02";

import AOS from "aos";
import "./assets/css/aos.css"
import { useEffect } from "react";
import Header from "./components/global/header";
import Footer from "./components/global/footer";
import SingleBlog from "./components/pages/single-blog";



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Version01 />} />
        <Route path="home" element={<Version01 />} />
        <Route path="/version-02" element={<Version02 />} />
        <Route path="/single-blog" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;

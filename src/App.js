import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/margins-paddings.css";
import Version01 from "./components/pages/version-01";
import Version02 from "./components/pages/version-02";

import AOS from "aos";
import { useEffect } from "react";
import "./assets/css/aos.css";
import Footer from "./components/global/footer";
import Header from "./components/global/header";
import AllBlog from "./components/pages/all-blog";
import AllEvent from "./components/pages/all-events";

import SingleBlog from "./components/pages/single-blog";

import Version03 from "./components/pages/version-03";
import Version04 from "./components/pages/version-04";

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
        <Route path="v1" element={<Version01 />} />
        <Route path="v2" element={<Version02 />} />
        <Route path="v3" element={<Version03 />} />
        <Route path="v4" element={<Version04 />} />
        <Route path="v5" element={<Version02 />} />
        <Route path="v6" element={<Version02 />} />
        <Route path="single-blog" element={<SingleBlog />} />
        <Route path="all-blog" element={<AllBlog />} />
        <Route path="single-event" element={<SingleBlog />} />
        <Route path="all-event" element={<AllEvent />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;

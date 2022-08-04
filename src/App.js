import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/margins-paddings.css";
import Version01 from "./components/pages/version-01";
import Version02 from "./components/pages/version-02";
import Version03 from "./components/pages/version-03";
import Version04 from "./components/pages/version-04";
import Version06 from "./components/pages/version-06";
import Version05 from "./components/pages/version-05";

import AOS from "aos";
import "./assets/css/aos.css";
import { useEffect } from "react";
import AllBlog from "./components/pages/all-blog";
import AllEvent from "./components/pages/all-events";
import SingleBlog from "./components/pages/single-blog";
import BlogRightSidebar from "./components/pages/blog-right-sidebar";
import BlogLeftSidebar from "./components/pages/blog-left-sidebar";
import SingleEvent from "./components/pages/single-event";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Version01 />} />
          <Route path="v1" element={<Version01 />} />
          <Route path="v2" element={<Version02 />} />
          <Route path="v3" element={<Version03 />} />
          <Route path="v4" element={<Version04 />} />
          <Route path="v5" element={<Version05 />} />
          <Route path="v6" element={<Version06 />} />
          <Route path="single-blog" element={<SingleBlog />} />
          <Route path="all-blog" element={<AllBlog />} />
          <Route path="single-event" element={<SingleEvent />} />
          <Route path="all-events" element={<AllEvent />} />
          <Route path="blog-right-sidebar" element={<BlogRightSidebar />} />
          <Route path="blog-left-sidebar" element={<BlogLeftSidebar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

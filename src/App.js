import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/margins-paddings.css";
import Version01 from "./components/pages/version-01";
import Version02 from "./components/pages/version-02";
import Version03 from "./components/pages/version-03";
import Version04 from "./components/pages/version-04";
import Version05 from "./components/pages/version-05";
import Version06 from "./components/pages/version-06";

import AOS from "aos";
import { useEffect } from "react";
import "./assets/css/aos.css";
import AllBlog from "./components/pages/all-blog";
import AllEvent from "./components/pages/all-events";
import BlogLeftSidebar from "./components/pages/blog-left-sidebar";
import BlogRightSidebar from "./components/pages/blog-right-sidebar";
import SingleBlog from "./components/pages/single-blog";
import SingleEvent from "./components/pages/single-event";
import headerData from "./data/header.json";

function App() {
  const { header, headerv2, headerv3 } = headerData;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Version01 header={header} />} />
          <Route path="v1" element={<Version01 header={header} />} />
          <Route path="v2" element={<Version02 header={header} />} />
          <Route path="v3" element={<Version03 header={header} />} />
          <Route path="v4" element={<Version04 headerv2={headerv2} />} />
          <Route path="v5" element={<Version05 headerv2={headerv2} />} />
          <Route path="v6" element={<Version06 headerv2={headerv2} />} />
          <Route
            path="single-blog"
            element={<SingleBlog headerv3={headerv3} />}
          />
          <Route path="all-blog" element={<AllBlog headerv3={headerv3} />} />
          <Route
            path="single-event"
            element={<SingleEvent headerv3={headerv3} />}
          />
          <Route path="all-events" element={<AllEvent headerv3={headerv3} />} />
          <Route
            path="blog-right-sidebar"
            element={<BlogRightSidebar headerv3={headerv3} />}
          />
          <Route
            path="blog-left-sidebar"
            element={<BlogLeftSidebar headerv3={headerv3} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

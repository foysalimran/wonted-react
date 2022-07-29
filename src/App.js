import "./assets/css/margins-paddings.css";
import Version01 from "./components/pages/version-01";
import AOS from "aos";
import "./assets/css/aos.css"
import { useEffect } from "react";
import Header from "./components/global-components/header";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div id="preLoader"></div>
      <Header />
      <Version01 />
    </div>
  );
}

export default App;

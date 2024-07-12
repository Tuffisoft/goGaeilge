//react-router
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Games from "./pages/Games";
import Ainmhite from "./pages/Ainmhite.jsx";
import Dathanna from "./pages/Dathanna.jsx";
import Uimhreacha from "./pages/Uimhreacha.jsx";
import Torthai from "./pages/Torthai.jsx";
import Glasrai from "./pages/Glasrai.jsx";
import Aimsir from "./pages/Aimsir.jsx";
import AbharPriontail from "./pages/AbharPriontail.jsx";

import PolasaíPríobháideachta from "./pages/PrivacyPolicy.jsx";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieInfo from "./components/CookieInfo.jsx";

function App() {
  return (
    <>
      {/* Container for background */}
      <div className="background min-h-dvh bg-ggWhite font-lex">
        {/* Container for grainy texture background */}
        <div className="grainy-background min-h-dvh">
          {/* Container for header */}
          <Header />
          {/* Routes for pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/muide" element={<About />} />
            <Route path="/teagmháil" element={<Contact />} />
            <Route path="/cluichí" element={<Games />} />
            <Route path="/cluichí/ainmhite" element={<Ainmhite />} />
            <Route path="/cluichí/dathanna" element={<Dathanna />} />
            <Route path="/cluichí/uimhreacha" element={<Uimhreacha />} />
            <Route path="/cluichí/torthaí" element={<Torthai />} />
            <Route path="/cluichí/glasraí" element={<Glasrai />} />
            <Route path="/cluichí/aimsir" element={<Aimsir />} />
            <Route
              path="/polasaí-príobháideachta"
              element={<PolasaíPríobháideachta />}
            />
            <Route path="/ábhar-priontáil" element={<AbharPriontail />} />
          </Routes>
          {/* Cookie info */}
          <CookieInfo />
          {/* Container for footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

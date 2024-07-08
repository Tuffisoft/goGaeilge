//react-router
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Games from "./pages/Games";
import Ainmhite from "./pages/Ainmhite";
import Dathanna from "./pages/Dathanna";
import Uimhireacha from "./pages/Uimhreacha";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Container for background */}
      <div className="min-h-dvh bg-ggLight font-lex">
        {/* Container for header */}
        <Header />
        {/* Routes for pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/muide" element={<About />} />
          <Route path="/teangmháil" element={<Contact />} />
          <Route path="/cluichí" element={<Games />} />
          <Route path="/cluichí/ainmhite" element={<Ainmhite />} />
          <Route path="/cluichí/dathanna" element={<Dathanna />} />
          <Route path="/cluichí/uimhreacha" element={<Uimhireacha />} />
        </Routes>
        <Footer />  
      </div>
    </>
  );
}

export default App;

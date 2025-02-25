//react-router
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Games from "./pages/Games";
import BlogList from "./blog/BlogList";
import BlogPost from "./blog/BlogPost";
import Siopa from "./pages/Siopa";
import Ainmhite from "./pages/Ainmhite.jsx";
import Dathanna from "./pages/Dathanna.jsx";
import Uimhreacha from "./pages/Uimhreacha.jsx";
import Torthai from "./pages/Torthai.jsx";
import Glasrai from "./pages/Glasrai.jsx";
import Aimsir from "./pages/Aimsir.jsx";
import AbharPriontail from "./pages/AbharPriontail.jsx";
import PolasaíPríobháideachta from "./pages/PrivacyPolicy.jsx";
import ProductDetail from './pages/ProductDetail';
import NotFound from "./pages/NotFound.jsx";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieInfo from "./components/CookieInfo.jsx";
import Checkout from './components/Checkout';

//context
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
    <CartProvider>
      {/* Container */}
      <div className="background grid min-h-[100dvh] grid-rows-[auto_1fr_auto] bg-ggWhite font-lex">
        {/* Container for grainy texture background */}
        <div className="grainy-background">
          {/* Container for header */}
          <Header />
          {/* Routes for pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/muide" element={<About />} />
            <Route path="/teagmháil" element={<Contact />} />
            <Route path="/cluichí" element={<Games />} />
            <Route path="/léamh" element={<BlogList />} />
            <Route path="/léamh/:id" element={<BlogPost />} />
            <Route path="/siopa" element={<Siopa />} />
            <Route path="/siopa/:id" element={<ProductDetail />} />
            <Route path="/cluichí/ainmhite" element={<Ainmhite />} />
            <Route path="/cluichí/dathanna" element={<Dathanna />} />
            <Route path="/cluichí/uimhreacha" element={<Uimhreacha />} />
            <Route path="/cluichí/torthai" element={<Torthai />} />
            <Route path="/cluichí/glasrai" element={<Glasrai />} />
            <Route path="/cluichí/aimsir" element={<Aimsir />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/polasaí-príobháideachta"
              element={<PolasaíPríobháideachta />}
            />
            <Route path="/ábhar-priontáil" element={<AbharPriontail />} />
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Cookie info */}
          <CookieInfo />
          {/* Container for footer */}
          <Footer />
        </div>
      </div>
    </CartProvider>
    </>
  );
}

export default App;

import { useState } from "react";
import { Link } from "react-router-dom";
import { LiaHamburgerSolid } from "react-icons/lia";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header-container flex flex-col h-24 items-center justify-center">
        
       
            {/* Logo */}
            <div className="logo mb-4">
              <Link to="/">
                <img
                  src="/logo.svg"
                  alt="The logo of goGaeilge"
                  className="w-48"
                />
              </Link>
            </div>
            {/* Logo ends */}

            {/* Hamburger menu button */}
            <button
              className="md:hidden text-ggPurple text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <LiaHamburgerSolid />
            </button>

            {/* Menu */}
            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:block w-full md:w-auto`}
            >
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0 bg-white md:bg-transparent md:shadow-none">
                <Link to="/cluichí" className="text-ggPurple hover:text-ggBlue">
                  Cluichí
                </Link>
                <Link to="/léamh" className="text-ggPurple hover:text-ggBlue">
                  Léamh
                </Link>
                <Link
                  to="/ábhar-priontáil"
                  className="text-ggPurple hover:text-ggBlue"
                >
                  Ábhar Priontáil
                </Link>
                <Link to="/siopa" className="text-ggPurple hover:text-ggBlue">
                  Siopa
                </Link>
                <Link to="/muide" className="text-ggPurple hover:text-ggBlue">
                  Cé muid?
                </Link>
                <Link
                  to="/teagmháil"
                  className="text-ggPurple hover:text-ggBlue"
                >
                  Teagmháil
                </Link>
              </div>
            </nav>
            {/* Menu ends */}
 

      </header>
    </>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LiaHamburgerSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header-container flex flex-col h-44 items-center justify-center">
        {/* Logo */}
        <div className="logo mb-4">
          <Link to="/">
            <img src="/logo.svg" alt="The logo of goGaeilge" className="w-48" />
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
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block w-full md:w-auto`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0 bg-ggWhite md:bg-ggTransparent absolute md:relative left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 z-10 w-48 md:w-auto border-2 md:border-0 border-ggPurple rounded-xl">
            {/* Close button - only for mobile */}
            <div className="w-full flex justify-center mb-2 md:hidden">
              <button
                className="text-ggPurple text-xl"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <IoMdClose />
              </button>
            </div>
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
            <Link to="/teagmháil" className="text-ggPurple hover:text-ggBlue">
              Teagmháil
            </Link>
          </div>
        </nav>
        {/* Menu ends */}
      </header>
    </>
  );
}

//react-router
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Container for header */}
      <header className="header-container p-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Logo */}
            <div className="logo flex justify-center md:justify-start">
              <Link to="/">
                <img
                  src="/logo.svg"
                  alt="The logo of goGaeilge"
                  className="w-48"
                />
              </Link>
            </div>
            {/* Logo ends */}

            {/* Menu */}
            <nav className="menu flex flex-col md:flex-row justify-center md:justify-end text-center space-y-2 md:space-y-0 md:space-x-4">
              <Link to="/cluichí" className="text-ggPurple hover:text-ggBlue">
                Cluichí
              </Link>
              <Link to="/léamh" className="text-ggPurple hover:text-ggBlue">
                Léamh
              </Link>
              <Link to="/muide" className="text-ggPurple hover:text-ggBlue">
                Cé muid?
              </Link>
              <Link to="/teagmháil" className="text-ggPurple hover:text-ggBlue">
                Teagmháil
              </Link>
            </nav>
            {/* Menu ends */}
          </div>
        </div>
      </header>
    </>
  );
}

export default function Footer() {
  return <>
    {/* Container for footer */}
    <footer className="footer-container p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Logo */}
          <div className="logo flex justify-center md:justify-start">
            <img
              src="/logo.svg"
              alt="The logo of goGaeilge"
              className="w-48"
            />
          </div>
          {/* Logo ends */}

          {/* Menu */}
          <nav className="menu flex flex-col md:flex-row justify-center md:justify-end text-center space-y-2 md:space-y-0 md:space-x-4">
            <a
              href="https://www.facebook.com/goGaeilge"
              target="_blank"
              rel="noreferrer"
              className="text-ggPurple hover:text-ggBlue"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/goGaeilge"
              target="_blank"
              rel="noreferrer"
              className="text-ggPurple hover:text-ggBlue"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/goGaeilge"
              target="_blank"
              rel="noreferrer"
              className="text-ggPurple hover:text-ggBlue"
            >
              Twitter
            </a>
          </nav>
          {/* Menu ends */}
        </div>
      </div>
    </footer>
  </>;
}

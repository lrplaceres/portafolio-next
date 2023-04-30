import Link from "next/link";

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark"
    data-bs-theme="dark"
  >
    <div className="container">
      <Link className="navbar-brand" href="/">
        Portafolio
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github" className="nav-link">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

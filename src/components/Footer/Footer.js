import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <a
        className="link"
        href="https://github.com/Dimterion"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        className="link"
        href="https://twitter.com/Dimterion"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        className="link"
        href="https://medium.com/@dimterion"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-medium"></i>
      </a>
      <a className="link" href="#top">
        <i className="fa-solid fa-angles-up"></i>
      </a>
      <a className="link" href="https://the-final-piece.vercel.app/">
        <svg
          id="the-final-piece"
          fill="none"
          height="24"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5757 1.42426C11.81 1.18995 12.1899 1.18995 12.4243 1.42426L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42426 12.4243C1.18995 12.19 1.18995 11.8101 1.42426 11.5757L11.5757 1.42426Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </footer>
  );
}

export default Footer;

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
    </footer>
  );
}

export default Footer;

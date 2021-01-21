import { Fragment, useState } from "react";

const Header = () => {
  const [showToTop, setShowToTop] = useState(false);
  const scrollTop = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
    setShowToTop(false);
  };
  return (
    <Fragment>
      <header className="scrollspy" id="header-container">
        <div className="text-container">
          <span id="greeting">Hello there! I'm</span>
          <h1 id="name" className="m-0">
            Jansey Garita
          </h1>
          <h2 id="presentation" className="px-3 m-0">
            a Full Stack Web Developer from Costa Rica <br />
            passionate about UX/UI design and JavaScript
          </h2>
        </div>
        <a
          href="https://www.janseygarita.com/docs/Resume - Jansey Garita.pdf"
          download
          target="_blank"
          rel="noreferrer"
          className="waves-effect float waves-light btn px-5 box-shadow-none rounded-pill"
          id="cv-btn"
        >
          <span className="text">cv </span>
          <span>
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 384 512"
              style={{ width: "14px", paddingTop: "8px", marginLeft: "8px" }}
              className="right svg-inline--fa fa-arrow-to-bottom fa-w-12 fa-2x"
            >
              <path
                fill="currentColor"
                d="M348.5 264l-148 148.5c-4.7 4.7-12.3 4.7-17 0L35.5 264c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.4 116V44c0-6.6 5.4-12 12-12h10c6.6 0 12 5.4 12 12v311.9L324.4 240c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.6 4.7 12.2 0 16.9zM384 468v-8c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12z"
              ></path>
            </svg>
          </span>
          <div className="liquid"></div>
        </a>
      </header>
      {showToTop && (
        <div className="fixed-action-btn">
          <a
            className="btn-floating active btn-large indigo"
            id="cv-btn-fixed"
            href="#!"
            onClick={() => {
              scrollTop();
            }}
          >
            <i className="large material-icons">download</i>
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default Header;

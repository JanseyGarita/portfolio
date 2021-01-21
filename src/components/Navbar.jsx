import { Fragment, useEffect } from "react";
import "./styles/navStyles.css";
import M from "materialize-css";
import useWidth from "./useWidth";
const Navbar = () => {
  var width = useWidth();

  useEffect(() => {
    if (width <= 768) {
      const sidenav = document.querySelector("#mobile-demo");
      sidenav.addEventListener("click", (e) => {
        var sidenavInstance = M.Sidenav.getInstance(sidenav);
        setTimeout(() => {
          sidenavInstance.close();
        }, 200);
      });
    }
  }, [width]);

  return (
    <Fragment>
      <div className="navbar-fixed">
        <nav className="box-shadow-none" id="navbar">
          <div className="nav-wrapper container">
            <div className="title-container">
              <a
                href="#header-container"
                className="brand-logo"
                id="brand-logo"
              >
                jg
              </a>
            </div>
            <a
              href="#header-container"
              data-target="mobile-demo"
              className="sidenav-trigger"
            >
              <svg
                viewBox="0 0 100 80"
                width="30"
                height="30"
                fill="#fff"
                style={{ marginTop: "20px" }}
              >
                <rect width="100" height="10"></rect>
                <rect
                  y="30"
                  x={width <= 480 ? "20" : "0"}
                  width="80"
                  height="10"
                ></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </a>
            {width > 768 ? (
              <ul className="right hide-on-med-and-down text-uppercase">
                <li>
                  <a href="#competencies">
                    <span>competencies</span>
                  </a>
                </li>
                <li>
                  <a href="#projects">
                    <span>projects</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span>about</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span>contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.janseygarita.com/docs/Resume - Jansey Garita.pdf"
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 relative"
                    style={{
                      border: ".5px solid #dadada",
                      borderRadius: "50px",
                    }}
                  >
                    <span style={{ paddingRight: "18px" }}>
                      Download CV
                      <span className="right relative">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 384 512"
                          style={{
                            width: "12px",
                            marginTop: "25px",
                            marginLeft: "-33px",
                          }}
                          className="relative svg-inline--fa fa-arrow-to-bottom fa-w-12 fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M348.5 264l-148 148.5c-4.7 4.7-12.3 4.7-17 0L35.5 264c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.4 116V44c0-6.6 5.4-12 12-12h10c6.6 0 12 5.4 12 12v311.9L324.4 240c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.6 4.7 12.2 0 16.9zM384 468v-8c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>
      </div>
      {width <= 768 ? (
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a
              href="https://www.janseygarita.com/docs/Resume - Jansey Garita.pdf"
              download
              target="_blank"
              rel="noreferrer"
              id="mobile-cv"
              className="text-center my-2 teal-text"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="d-flex">
                Download CV
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 384 512"
                  style={{ width: "14px" }}
                  className="ml-2 svg-inline--fa fa-arrow-to-bottom fa-w-12 fa-2x relative"
                >
                  <path
                    fill="currentColor"
                    d="M348.5 264l-148 148.5c-4.7 4.7-12.3 4.7-17 0L35.5 264c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.4 116V44c0-6.6 5.4-12 12-12h10c6.6 0 12 5.4 12 12v311.9L324.4 240c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.6 4.7 12.2 0 16.9zM384 468v-8c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12z"
                  ></path>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    width: "16px",
                    marginTop: "24px",
                    marginRight: "20px",
                  }}
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-envelope fa-w-16 fa-2x left"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                contact
              </span>
            </a>
          </li>
          <li>
            <a href="#about">
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    width: "18px",
                    marginTop: "24px",
                    marginRight: "20px",
                  }}
                  viewBox="0 0 576 512"
                  className="svg-inline--fa fa-puzzle-piece fa-w-18 fa-2x left"
                >
                  <path
                    fill="currentColor"
                    d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"
                  ></path>
                </svg>
                about
              </span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    width: "16px",
                    marginTop: "24px",
                    marginRight: "20px",
                  }}
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-stream fa-w-16 fa-2x left"
                >
                  <path
                    fill="currentColor"
                    d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
                  ></path>
                </svg>
                projects
              </span>
            </a>
          </li>
          <li>
            <a href="#competencies">
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    width: "16px",
                    marginTop: "24px",
                    marginRight: "20px",
                  }}
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-fire-alt fa-w-14 fa-2x left"
                >
                  <path
                    fill="currentColor"
                    d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"
                  ></path>
                </svg>
                competencies
              </span>
            </a>
          </li>
        </ul>
      ) : null}
    </Fragment>
  );
};

export default Navbar;

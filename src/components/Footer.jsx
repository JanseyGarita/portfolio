import { useState } from "react";
import "./styles/footerStyles.css";
import M from "materialize-css";
import { db } from "./database";
const Footer = () => {
  const initialInfo = {
    username: "",
    email: "",
    message: "",
  };
  const [mailInfo, setMailInfo] = useState(initialInfo);

  const updateInfo = (e) => {
    e.preventDefault();
    setMailInfo({ ...mailInfo, [e.target.id]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setMailInfo(initialInfo);
    e.target.reset();
    saveMessage(mailInfo);

    M.toast({ html: "Message sent! :)", classes: "rounded teal" });
  };
  const saveMessage = async (data) => {
    await db.collection("messages").doc().set(data);
  };
  return (
    <div
      className="pb-3 mt-5 mx-0 text-center white-text relative scrollspy container"
      id="contact"
      style={{
        backgroundColor: "#1e272e",
        borderTop: "5px solid #00d8d6",
      }}
    >
      <div className="row px-5 mb-0">
        <div className="col s12 l5 pr-5 py-2 pt-5 pb-5 info-col">
          <div
            className="container py-3 social-media"
            style={{ width: "fit-content" }}
          >
            <p className="pb-4 font-weight-bold">Follow me</p>
            <div className="social-media-links py-3">
              {/*
                    Twitter
                */}
              <a
                href="https://twitter.com/janseygarita"
                className="social-media-link my-2 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  style={{ width: "16px" }}
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-twitter fa-w-16 fa-2x"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              {/*
                    LinkedIn
                */}
              <a
                href="https://www.linkedin.com/in/jansey-garita-a829701b3"
                className="social-media-link my-2 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  style={{ width: "16px" }}
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-linkedin-in fa-w-14 fa-2x"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
              {/*
                    Github
                */}
              <a
                href="https://github.com/JanseyGarita"
                className="social-media-link my-2 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  style={{ width: "16px" }}
                  viewBox="0 0 496 512"
                  className="svg-inline--fa fa-github fa-w-16 fa-2x"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-info text-left pt-3">
            <p>
              I built this website using{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                React
              </a>{" "}
              as a personal website and portfolio in December 2020. I'm
              constantly learning, so if you want to send me feedback or want me
              to work with you, please send me an email or use the form on the
              side :D
            </p>
            <div className="divider my-3"></div>
            <p>
              <svg
                aria-hidden="true"
                focusable="false"
                style={{
                  width: "18px",
                  marginTop: "3px",
                  marginRight: "10px",
                }}
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-envelope fa-w-16 fa-2x left"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              contact@janseygarita.com
            </p>
            <div className="divider my-3"></div>
            <p>
              <svg
                aria-hidden="true"
                focusable="false"
                style={{
                  width: "18px",
                  marginTop: "-3px",
                  marginRight: "10px",
                }}
                viewBox="0 0 384 512"
                className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x left"
              >
                <path
                  fill="currentColor"
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                ></path>
              </svg>{" "}
              Siquirres, Limón, Costa Rica
            </p>
            <div className="divider my-3"></div>
            <p>
              Photos used in <a href="#about">What I Do</a> section are by{" "}
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@halacious?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              >
                Halacious
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@kelli_mcclintock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              >
                Kelli McClintock
              </a>{" "}
              on{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/collections/9596951/doodles%3A-website-%2B-apps-%2B-layouts?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              >
                Unsplash
              </a>
            </p>
          </div>
        </div>

        <div className="col s12 l7 px-5 py-2 pt-5 mt-4 border-left contact-col">
          <div className="footer-contact-title">
            <span>Drop me a message</span>
            <p className="pt-2">
              I'd love to hear from you. Feedback is always well received!
            </p>
          </div>
          <form onSubmit={onSubmitHandler} className="container-fluid px-4">
            <div className="row">
              <div className="input-field col s12 l6">
                <input
                  id="username"
                  type="text"
                  className="validate"
                  value={mailInfo.username}
                  onChange={updateInfo}
                  required
                />
                <label htmlFor="username">Name</label>
              </div>
              <div className="input-field col s12 l6">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  value={mailInfo.email}
                  onChange={updateInfo}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="message"
                  type="text"
                  className="validate"
                  value={mailInfo.message}
                  onChange={updateInfo}
                  required
                />
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="row text-right pr-3">
              <button
                className="btn waves-effect waves-light teal darken-2 px-5 rounded-pill"
                type="submit"
                name="action"
              >
                <span style={{ marginRight: "10px" }}>Send</span>
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    style={{
                      width: "16px",
                      marginTop: "9px",
                    }}
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-paper-plane fa-w-16 fa-2x right"
                  >
                    <path
                      fill="currentColor"
                      d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <section className="relative d-flex text-center py-4 px-4">
        <span
          id="copyright-label"
          className="text-secondary relative white-text py-4"
          style={{ width: "100%" }}
        >
          Copyright &copy; 2019 - {new Date().getFullYear()} Jansey Garita
          Amador. All Rights Reserved.
        </span>
      </section>
    </div>
  );
};

export default Footer;

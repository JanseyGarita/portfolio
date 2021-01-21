import { useEffect, useRef } from "react";
import Header from "./home/Header";
import Projects from "./home/Projects";
import SectionTitle from "./home/SectionTitle";
import About from "./home/About";
import Technologies from "./home/Technologies";

import "./styles/homeStyles.css";
import M from "materialize-css";
const Home = () => {
  const scroll = useRef(null);
  const scrollTopBtn = useRef(null);
  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scroll.current) {
        let offset =
          document.body.offsetHeight -
          document.querySelector("#contact").offsetHeight;
        if (window.innerHeight + window.scrollY >= offset) {
          scroll.current.classList.add("hideScroll");
        } else {
          scroll.current.classList.remove("hideScroll");
        }
        if (
          window.scrollY >=
          document.querySelector("#header-container").offsetHeight
        ) {
          if (scrollTopBtn.current.classList.contains("hideScroll")) {
            scrollTopBtn.current.classList.remove("hideScroll");
          }
        } else {
          if (!scrollTopBtn.current.classList.contains("hideScroll")) {
            scrollTopBtn.current.classList.add("hideScroll");
          }
        }
      }
    };
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return window.removeEventListener("scroll", () => {
      handleScroll();
    });
  }, []);

  return (
    <div className="container-fluid home-sections" id="home-sections">
      <Header />
      <SectionTitle
        title="competencies"
        number="01"
        numberColor="#ffa801"
        spaceTop="200px"
      />
      <Technologies />

      <SectionTitle
        title="projects"
        number="02"
        numberColor="#2bcbba"
        spaceTop="200px"
      />
      <Projects />
      <SectionTitle
        title="what i do"
        number="03"
        numberColor="#fc5c65"
        spaceTop="200px"
      />
      <About />
      <span
        className="d-flex flex-column justify-content-center align-items-center"
        id="scroll-message"
        ref={scroll}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 448 512"
          style={{ width: "20px" }}
          className="svg-inline--fa fa-arrow-down fa-w-14 fa-2x"
        >
          <path
            fill="currentColor"
            d="M441.9 250.1l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L250 385.4V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v341.4L42.9 230.3c-4.7-4.7-12.3-4.7-17 0L6.1 250.1c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
            className=""
          ></path>
        </svg>
      </span>
      <a
        href="#header-container"
        className="waves-effect waves-light btn hideScroll"
        style={{ backgroundColor: "#1e272e" }}
        id="scrollTopBtn"
        ref={scrollTopBtn}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 448 512"
          style={{ width: "16px" }}
          className="svg-inline--fa fa-arrow-up fa-w-14 fa-2x pt-2"
        >
          <path
            fill="currentColor"
            d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z"
            className=""
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Home;

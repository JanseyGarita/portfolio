import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import "materialize-css/dist/css/materialize.min.css";
import useWidth from "./useWidth";
const App = () => {
  //document.body.classList.add("loading");

  const width = useWidth();

  useEffect(() => {
    if (width > 768) {
      var cursor = document.querySelector(".custom-cursor");
      var initCursor = false;
      window.onmousemove = function (e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        if (!initCursor) {
          cursor.style.opacity = 1;
          initCursor = true;
        }
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      };
      window.onmouseout = function (e) {
        cursor.style.opacity = 0;
        initCursor = false;
      };

      const updateProperties = (elem, state) => {
        elem.style.setProperty("--x", `${state.x}px`);
        elem.style.setProperty("--y", `${state.y}px`);
        elem.style.setProperty("--width", `${state.width}px`);
        elem.style.setProperty("--height", `${state.height}px`);
        elem.style.setProperty("--radius", state.radius);
        elem.style.setProperty("--scale", state.scale);
      };
      document.querySelectorAll(".cursor").forEach((cursor) => {
        let onElement;
        const createState = (e) => {
          const defaultState = {
            x: e.clientX,
            y: e.clientY,
            width: 40,
            height: 40,
            radius: "50%",
          };
          const computedState = {};
          if (onElement != null) {
            const {
              top,
              left,
              width,
              height,
            } = onElement.getBoundingClientRect();
            const radius = window.getComputedStyle(onElement)
              .borderTopLeftRadius;

            computedState.x = left + width / 2;
            computedState.y = top + height / 2;
            computedState.width = width;
            computedState.height = height;
            computedState.radius = radius;
          }
          return {
            ...defaultState,
            ...computedState,
          };
        };

        document.addEventListener("mousemove", (e) => {
          const state = createState(e);
          updateProperties(cursor, state);
        });

        setTimeout(() => {
          document.querySelectorAll("a, button").forEach((elem) => {
            elem.addEventListener("mouseenter", () => (onElement = elem));
            elem.addEventListener("mouseleave", () => (onElement = undefined));
          });
          //document.body.classList.remove("loading");
        }, 500);
      });
    }
  }, [width]);
  return (
    <Fragment>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
      {width > 768 ? <div className="custom-cursor"></div> : null}
    </Fragment>
  );
};

export default App;

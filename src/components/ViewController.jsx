import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
function ViewController({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      /**Auto scroll top */
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ViewController);

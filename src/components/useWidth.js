import { useEffect, useState } from "react";
import M from "materialize-css";

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      if (
        (window.innerWidth >= 768 && width <= 768) ||
        (window.innerWidth <= 768 && width >= 768)
      ) {
        setWidth(window.innerWidth);
        M.AutoInit();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, setWidth]);
  return width;
};

export default useWidth;

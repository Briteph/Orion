import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  return windowDimensions;
}

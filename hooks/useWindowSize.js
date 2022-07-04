import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    window.addEventListener(
      "resize",
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );
    return () =>
      window.removeEventListener(
        "resize",
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
  }, []);

  return windowDimensions;
}

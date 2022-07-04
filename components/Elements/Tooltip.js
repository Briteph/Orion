import React, { useState } from "react";

export default function Tooltip({ children, title, position }) {
  const [hover, setHover] = useState(false);
  const tooltipPosition = {
    top: "translateY(calc(-100% - 0.6rem))",
    bottom: "translateY(calc(100% + 0.6rem))",
    left: "translateX(calc(-100% - 0.6rem))",
    right: "translateX(calc(100% + 0.6rem))",
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex items-center justify-center"
    >
      {children}
      {hover ? (
        <div
          className={`
            absolute z-[9999]
            text-xs text-white p-2 rounded-md bg-gray-600
          `}
          style={{ transform: tooltipPosition[position] }}
        >
          {title}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

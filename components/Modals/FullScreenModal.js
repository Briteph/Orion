import React, { useRef } from "react";

export default function FullScreenModal({ children, show }) {
  const innerRef = useRef();

  if (!show) {
    return;
  }

  return (
    <div className="absolute top-0 left-0 z-[99999] bg-black bg-opacity-70 w-screen h-screen">
      <div className="flex items-center justify-center h-full w-full">
        <div ref={innerRef}>{children}</div>
      </div>
    </div>
  );
}

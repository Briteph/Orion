import React from "react";

function ButtonSecondary({
  children,
  id,
  addClass = "",
  onClick,
  disabled,
  ...props
}) {
  return (
    <button
      id={id}
      className={`px-3 py-1 rounded-lg font-bold text-[14px] border-2 shadow-sm ${
        disabled
          ? "bg-gray-200"
          : "bg-[#FEAC00] border-[#FEAC00] hover:bg-yellow-300"
      } text-almostblack ${addClass}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;

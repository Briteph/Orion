import React from "react";

function ButtonReset({
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
      className={`px-3 py-1 rounded-lg text-m uppercase border-2 shadow-sm ${
        disabled ? "bg-gray-200" : "hover:bg-[#F47E7E] hover:border-[#F47E7E]"
      } ${addClass}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonReset;

import React from "react";

function ButtonPrimary({
    children,
    id,
    addClass = "",
    onClick,
    disabled,
    ...props
}){
    return (
        <button
            id={id}
            className={`px-3 py-1 rounded-lg text-m uppercase border-2 shadow-sm ${
                disabled
                ? "bg-gray-200"
                : "hover:bg-[#5179DF] hover:border-[#5179DF]"
            } text-white ${addClass}`}
            disabled={disabled}
            onClick={onClick}
            {...props}
            >
            {children}
        </button>
    )
}

export default ButtonPrimary;
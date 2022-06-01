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
            className={`px-4 py-2 text-lg font-bold uppercase border-2 shadow-sm ${
                disabled
                ? "bg-gray-200"
                : "bg-strumnYellow border-strumnYellow hover:bg-yellow-300"
            } text-almostBlack ${addClass}`}
            disabled={disabled}
            onClick={onClick}
            {...props}
            >
            {children}
        </button>
    )
}

export default ButtonPrimary;
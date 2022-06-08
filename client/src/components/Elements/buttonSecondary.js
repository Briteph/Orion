import React from "react";

function ButtonSecondary({
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
            className={`px-3 py-1 rounded-lg text-base font-bold uppercase border-2 shadow-sm ${
                disabled
                ? "bg-gray-200"
                : "bg-orionYellow border-orionYellow hover:bg-yellow-300"
            } text-almostblack ${addClass}`}
            disabled={disabled}
            onClick={onClick}
            {...props}
            >
            {children}
        </button>
    )
}

export default ButtonSecondary;
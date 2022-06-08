import React from "react";

function Card({ children, id, addClass }) {
    return (
        <div
            id={id}
            className={
            "relative px-5 py-7 border-gray-100 bg-white rounded-lg drop-shadow-lg items-center" +
            addClass
            }
        >
            {children}
        </div>
        );
    }

export default Card;
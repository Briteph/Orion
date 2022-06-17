import React from "react";

function Content({ children, addClass }) {

    return (
        <div
            className={
            `${addClass}` }
        >
            {children}
        </div>
        );
    }

export default Content;
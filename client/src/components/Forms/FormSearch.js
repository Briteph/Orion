import React from "react";
import { BiSearch as Icon } from "react-icons/bi";

function FormSearch({
        children,
        type,
        id,
        value,
        labelClass,
        placeHolder,
        onChange,
        addClass
    }) {
    return (
        <div className={`${addClass}`}>
            <label
                htmlFor={id}
                className={"block uppercase text-almostBlack " + labelClass}
            >
                {children}
            </label>
            <div className="relative justify-center align-center">
                <input
                type={type}
                name={id}
                id={id}
                value={value}
                placeholder={placeHolder}
                className={
                    "w-full py-1 text-almostBlack text-base pl-8 rounded-md"
                }
                onChange={onChange}
                />
                <Icon className={" absolute top-1 left-2 text-xl  text-gray-400 "} />
            </div>
        </div>
    );
}

export default FormSearch;

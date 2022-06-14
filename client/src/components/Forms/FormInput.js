import React from "react";

function FormInput({
    children,
    type,
    id,
    value,
    labelClass,
    inputClass,
    placeHolder,
    required,
    onChange,
}) {
    return (
        <div>
        <label
            htmlFor={id}
            className={"block my-2 uppercase text-almostBlack " + labelClass}
        >
            {children} {required && <span aria-hidden="true">*</span>}
        </label>
        <div className="relative">
            <input
            type={type}
            name={id}
            id={id}
            value={value}
            placeholder={placeHolder}
            className={
                "w-full px-5 py-3 bg-gray-100 text-almostBlack text-lg font-bold " +
                inputClass
            }
            required={required}
            onChange={onChange}
            ></input>
        </div>
        </div>
    );
}

export default FormInput;
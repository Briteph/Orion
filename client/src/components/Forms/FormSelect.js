import React from "react";

function FormSelect({
  children,
  id,
  labelClass,
  value,
  required,
  defValue,
  options = [],
  onChange,
  icon,
  addClass
}) {
  return (
    <div>
        <label
        htmlFor={id}
        className={"" + labelClass}
        >
        {children} {required && <span aria-hidden="true">*</span>}
        </label>
        <div className="relative rounder-xl">
            <select
                name={id}
                id={id}
                value={value}
                className={`w-full px-5 font-bold appearance-none bg-[#EDEDED] focus:outline-none ${addClass}`}
                onChange={onChange}
            >
                <option value="">{defValue}</option>
                {options.map((option) => (
                <option key={option.key} value={option.value}>
                    {option.text}
                </option>
                ))}
            </select>
            {icon}
        </div>
    </div>
    );
}

export default FormSelect;
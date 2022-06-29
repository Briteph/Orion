import React, { useState } from "react";

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
  addClass,
}) {
  const [textHighlight, setTextHighlight] = useState(false);
  return (
    <div>
      <label
        htmlFor={id}
        className={`${
          textHighlight ? " font-[700] text-[#5179DF] " : " text-[#7F8289] "
        } ${labelClass}`}
      >
        {children} {required && <span aria-hidden="true">*</span>}
      </label>
      <div className="relative rounder-xl">
        <select
          name={id}
          id={id}
          value={value}
          className={`w-full font-bold appearance-none focus:outline-none ${addClass}`}
          onChange={onChange}
          onFocus={() => {
            setTextHighlight(true);
          }}
          onBlur={() => {
            setTextHighlight(false);
          }}
        >
          <option value="">
            {defValue}
            {}
          </option>
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

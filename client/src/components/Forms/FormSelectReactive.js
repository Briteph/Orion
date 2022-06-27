import React, { useState } from "react";

export default function FormSelectReactive({
  children,
  id,
  value,
  addClass,
  onChange,
  defValue,
  options,
}) {
  const [textHighlight, setTextHighlight] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={
          textHighlight ? ` font-[700] text-[#5179DF] ` : ` text-[#7F8289] `
        }
      >
        {children}
      </label>
      <div>
        <select
          name={id}
          id={id}
          value={value}
          className={`w-full border-b-[1px] border-[#707070] border-opacity-25 text-[#7F8289] focus:outline-none focus:border-b-[2px] focus:border-[#5179DF] ${addClass}`}
          onChange={onChange}
          onFocus={() => {
            setTextHighlight(true);
          }}
          onBlur={() => {
            setTextHighlight(false);
          }}
        >
          <option value="">{defValue}</option>
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

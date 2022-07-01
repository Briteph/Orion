import React, { useState } from "react";

export default function DatePicker({ children, inputClass, id, onChange }) {
  const [textHighlight, setTextHighlight] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={
          textHighlight ? ` font-[700] text-[#5179DF] ` : ` text-[#7F8289] `
        }
      >
        <div className="text-[16px]">{children}</div>
      </label>
      <input
        id={id}
        type="date"
        className={`w-full text-[#7F8289] border-b-[1px] focus:outline-none focus:border-b-[2px] focus:border-[#5179DF] border-[#707070] border-opacity-25 ${inputClass}`}
        onChange={onChange}
        onFocus={() => {
          setTextHighlight(true);
        }}
        onBlur={() => {
          setTextHighlight(false);
        }}
      />
    </div>
  );
}

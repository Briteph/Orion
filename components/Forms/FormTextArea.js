import React, { useState } from "react";

function FormTextarea({
  children,
  id,
  value,
  textareaClass,
  labelClass,
  onChange,
  placeholder,
  rows,
  cols
}) {
    const [textHighlight, setTextHighlight] = useState(false)
  return (
    <div>
      <label
        htmlFor={id}
        className={
            `block ${textHighlight? " font-[700] text-[#5179DF] " : " text-[#7F8289] "} ${labelClass}`}
      >
        {children}
      </label>
      <textarea
        className={`w-full h-20 px-5 py-3 text-sm bg-gray-100 ${textareaClass}`}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => {
            setTextHighlight(true)
        }}
        onBlur={() =>{
            setTextHighlight(false)
        }}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
      ></textarea>
    </div>
  );
}

export default FormTextarea;
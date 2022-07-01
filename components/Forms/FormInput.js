import React, { useState } from "react";

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
  containerClass,
}) {
  const [textHighlight, setTextHighlight] = useState(false);
  return (
    <div className={`${containerClass}`}>
      <label
        htmlFor={id}
        className={
          `block ${
            textHighlight ? " font-[700] text-[#5179DF] " : " text-[#7F8289] "
          }` + labelClass
        }
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
          className={`w-full px-1 py-1 border-b-[1px] focus:outline-none focus:border-b-[2px] focus:border-[#5179DF] border-[#707070] border-opacity-25 text-almostBlack text-[16px] ${inputClass}`}
          required={required}
          onChange={onChange}
          onFocus={() => {
            setTextHighlight(true);
          }}
          onBlur={() => {
            setTextHighlight(false);
          }}
        ></input>
      </div>
    </div>
  );
}

export default FormInput;

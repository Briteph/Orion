import React from "react";

import { FaSortDown as SortDown } from 'react-icons/fa'
function FormSelect({
  children,
  id,
  labelClass,
  value,
  required,
  defValue,
  options = [],
  onChange,
}) {
  return (
    <div>
        <label
        htmlFor={id}
        className={"" + labelClass}
        >
        {children} {required && <span aria-hidden="true">*</span>}
        </label>
        <div className="relative">
            <select
                name={id}
                id={id}
                value={value}
                className="w-full px-5 text-[#5179DF] font-bold appearance-none bg-[#EDEDED] focus:outline-none"
                onChange={onChange}
            >
                <option value="">{defValue}</option>
                {options.map((option) => (
                <option key={option.key} value={option.value}>
                    {option.text}
                </option>
                ))}
            </select>
            <SortDown className="text-[#5179DF] absolute bottom-2 right-0" />
        </div>
    </div>
    );
}

export default FormSelect;
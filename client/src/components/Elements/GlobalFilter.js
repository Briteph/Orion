import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { BiSearch as Icon } from "react-icons/bi";

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  addClass,
  labelClass,
  children,
  type,
  placeHolder,
}) {
  // const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <div className={`${addClass}`}>
      <label className={"block uppercase text-almostBlack " + labelClass}>
        {children}
      </label>
      <div className="relative justify-center align-center">
        <input
          type={type}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={placeHolder}
          className={"w-full py-1 text-almostBlack text-base pl-8 rounded-md"}
        />
        <Icon className={" absolute top-1 left-2 text-xl  text-gray-400 "} />
      </div>
    </div>
  );
}

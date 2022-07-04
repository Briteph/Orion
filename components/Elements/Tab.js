import React from "react";

export default function Tab({ children, tabs, tabState, setTabState }) {
  return (
    <>
      <div className="flex border-b border-gray-300">
        {tabs.map((e, i) => {
          return (
            <div
              key={i}
              className={`${
                tabState === e.state
                  ? `text-[#5179DF] border-b-4 border-[#5179DF]`
                  : ``
              } px-5 py-1 flex justify-center`}
              onClick={() => setTabState(e.state)}
            >
              {e.text}
            </div>
          );
        })}
      </div>
      <div className="p-2">{children}</div>
    </>
  );
}

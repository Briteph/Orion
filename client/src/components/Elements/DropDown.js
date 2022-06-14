import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { BsFilter as FiltersIcon } from "react-icons/bs";
import Card from "./card";

// @params { children, label, buttonClass, labelClass, iconClass, cardItemClass }
const DropDown = forwardRef((props, ref) => {
  const innerref = useRef();
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle() {
      setOpen(!open);
    },
  }));

  useEffect(() => {
    const checkForOutsideClick = (event) => {
      if (open && innerref.current && !innerref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkForOutsideClick);

    return () => {
      document.removeEventListener("mousedown", checkForOutsideClick);
    };
  }, [open]);

  return (
    <div className="relative" ref={innerref}>
      <button
        className={`flex items-center justify-center gap-2 px-1 py-1 w-28 ${
          props.buttonClass ? props.buttonClass : ""
        } rounded-lg`}
        onClick={() => setOpen(!open)}
        aria-label={`${open ? "Hide filters menu" : "Show filters menu"}`}
      >
        <FiltersIcon className={`${props.iconClass ? props.iconClass : ""}`} />
        <div
          className={`items-center text-lg font-medium ${
            props.labelClass ? props.labelClass : ""
          }`}
        >
          {props.label}
        </div>
      </button>
      <div
        className={`z-10 absolute sm:right-0 w-screen sm:w-full mt-1 ${
          !open ? "hidden" : ""
        }`}
      >
        <Card addClass="px-0 py-0">
          <div>
            <div className={`flex flex-col gap-2 first:pt-2 last:pb-2 items-center ${props.cardItemClass}`}>
              {props.children}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
});

export default DropDown;

import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import Card from "./Card";

// @params { children, label, buttonClass, labelClass, iconClass, cardItemClass, menu, dropDownIcon }
const DropDown = forwardRef((props, ref) => {
  const innerref = useRef();
  const [open, setOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState("");

  useImperativeHandle(ref, () => ({
    toggle() {
      setOpen(!open);
    },
    setButtonColor,
  }));

  useEffect(() => {
    const checkForOutsideClick = (event) => {
      if (
        open &&
        innerref.current &&
        !innerref.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkForOutsideClick);

    return () => {
      document.removeEventListener("mousedown", checkForOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    if (props.menu) {
      const buttonDetails = props.menu.filter((e) => {
        return e.text === props.label.props.value;
      });
      setButtonColor(buttonDetails[0].color);
    }
  }, [buttonColor]);

  return (
    <div className="relative" ref={innerref}>
      <button
        className={`flex items-center justify-center gap-2 px-1 py-1 w-28 ${
          props.buttonClass ? props.buttonClass : ""
        } ${buttonColor} rounded-lg`}
        onClick={() => setOpen(!open)}
        aria-label={`${open ? "Hide filters menu" : "Show filters menu"}`}
      >
        {props.dropDownIcon}
        {/* <FiltersIcon className={`${props.iconClass ? props.iconClass : ""}`} /> */}
        <div
          className={`flex items-center text-lg font-medium ${
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
        <Card addClass="px-px py-0">
          <div>
            <div
              className={`flex flex-col gap-2 first:pt-2 last:pb-2 items-center ${props.cardItemClass}`}
            >
              {props.children}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
});

export default DropDown;

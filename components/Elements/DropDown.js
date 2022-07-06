import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

// @params { children, label, buttonClass, labelClass, cardItemClass, menu, dropDownIcon }
const DropDown = forwardRef((props, ref) => {
  const innerref = useRef();
  const buttonRef = useRef();
  const [open, setOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState("");
  const [menuWidth, setMenuWidth] = useState(0);

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
    setMenuWidth(buttonRef.current.clientWidth);
  }, []);

  useEffect(() => {
    if (props.menu) {
      const buttonDetails = props.menu.filter((e) => {
        return e.text === props.label.props.value;
      });
      setButtonColor(buttonDetails[0].color);
    }
  }, [buttonColor]);

  return (
    <div ref={innerref}>
      <button
        className={`
          flex items-center justify-center gap-2 p-1 rounded-lg
          ${props.buttonClass ? props.buttonClass : ""}
          ${buttonColor} 
        `}
        ref={buttonRef}
        onClick={() => setOpen(!open)}
      >
        {props.dropDownIcon ? props.dropDownIcon : ""}
        {props.label ? (
          <div
            className={`
            flex items-center text-lg font-medium
            ${props.labelClass ? props.labelClass : ""}
          `}
          >
            {props.label}
          </div>
        ) : (
          ""
        )}
      </button>
      <div
        className={`
          z-10 absolute border-gray-100 bg-white rounded-lg drop-shadow-lg
          ${!open ? "hidden" : ""}
        `}
        style={{ width: `${menuWidth}px` }}
      >
        <div
          className={`flex flex-col gap-1 items-center ${props.cardItemClass}`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
});

export default DropDown;

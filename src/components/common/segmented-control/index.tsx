import { useState, ReactNode, useRef, useEffect } from "react";

interface Option {
  label: string;
  value: string;
  icon?: ReactNode;
}

interface SegmentedControlProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  backgroundColor?: string;
  activeColor?: string;
  textColor?: string;
  activeTextColor?: string;
  className?: string;
  show?: boolean;
}

export const SegmentedControl = ({
  options,
  defaultValue,
  onChange,
  backgroundColor = "bg-gray-200",
  activeColor = "bg-black",
  textColor = "text-gray-700",
  activeTextColor = "text-white",
  className = "",
  show = true,
}: SegmentedControlProps) => {
  const [selectedIndex, setSelectedIndex] = useState(() => {
    if (defaultValue) {
      const index = options.findIndex((opt) => opt.value === defaultValue);
      return index >= 0 ? index : 0;
    }
    return 0;
  });

  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeButton = buttonsRef.current[selectedIndex];
    if (activeButton) {
      setSliderStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [selectedIndex]);

  useEffect(() => {}, [show]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onChange?.(options[index].value);
  };
  return (
    <>
      <div
        className={`relative w-fit px-1.5 ${backgroundColor} rounded-full p-1 text-sm inline-flex ${className} overflow-hidden transition-all duration-700`}
      >
        {/* Sliding background */}
        <div
          className={`absolute top-1 bottom-1 ${activeColor} rounded-full transition-all`}
          style={{
            left: `${sliderStyle.left}px`,
            width: `${sliderStyle.width}px`,
            opacity: show ? 1 : 0,
            transitionDuration: show ? "700ms" : "400ms",
          }}
        />

        {/* Buttons */}
        {options.map((option, index) => (
          <button
            key={option.value}
            ref={(el: any) => (buttonsRef.current[index] = el)}
            onClick={() => handleSelect(index)}
            style={{
              width: show ? 100 : 40 / options.length,
              height: 40,
              opacity: show ? 1 : 0,
              paddingLeft: show ? (option.icon ? "1.5rem" : "1rem") : 0,
              paddingRight: show ? (option.icon ? "1.5rem" : "1rem") : 0,
            }}
            className={`relative z-10 overflow-hidden rounded-full font-medium transition-all duration-1000 flex items-center justify-center gap-2 ${
              selectedIndex === index
                ? activeTextColor
                : `${textColor} hover:text-gray-900`
            }`}
          >
            {option.icon && <span>{option.icon}</span>}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default SegmentedControl;

// CustomDropdown.jsx
import React, { useState, useRef, useEffect } from "react";
import { CheckTickLogo, ChevronUpandDown } from "../assets/Icons";

export default function CustomDropdown({
  options = [],
  value = null,
  onChange = () => {},
  placeholder = "Select",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const ref = useRef(null);

  const selected = options.find((o) => o.value === value);

  // close on outside click
  useEffect(() => {
    function onDoc(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        setOpen(false);
        setHighlight(-1);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // keyboard navigation
  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setHighlight(0);
      } else if (highlight >= 0 && options[highlight]) {
        selectOption(options[highlight]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setHighlight(0);
      } else {
        setHighlight((h) => Math.min(h + 1, options.length - 1));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setHighlight(options.length - 1);
      } else {
        setHighlight((h) => Math.max(h - 1, 0));
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setHighlight(-1);
    } else if (e.key === "Home") {
      setHighlight(0);
    } else if (e.key === "End") {
      setHighlight(options.length - 1);
    }
  }

  function selectOption(opt) {
    onChange(opt.value);
    setOpen(false);
    setHighlight(-1);
  }

  return (
    <div
      ref={ref}
      className={`relative inline-block text-left ${className}`}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setOpen((o) => !o);
          if (!open) setHighlight(0);
        }}
        className="flex items-center gap-2 px-4 py-2 bg-[#F2F5F7] rounded-lg focus:outline-none focus:ring-2 "
      >
        <span className="text-[#034175] font-semibold">
          {selected ? selected.label : placeholder}
        </span>

        {/* chevron */}
        <ChevronUpandDown open={open} />
      </button>

      {/* Options panel */}
      {open && (
        <ul
          role="listbox"
          aria-activedescendant={
            highlight >= 0 ? `dropdown-option-${highlight}` : undefined
          }
          tabIndex={-1}
          className="absolute z-20 mt-2 w-48 max-h-52 overflow-auto bg-white rounded-lg py-1"
        >
          {options.map((opt, i) => {
            const isSelected = value === opt.value;
            const isHighlighted = i === highlight;
            return (
              <li
                id={`dropdown-option-${i}`}
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setHighlight(i)}
                onMouseLeave={() => setHighlight(-1)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  selectOption(opt);
                }}
                className={`cursor-pointer px-4 py-2 select-none flex items-center justify-between ${
                  isHighlighted ? "bg-sky-50" : ""
                } ${isSelected ? "font-semibold" : "text-slate-700"}`}
              >
                <span>{opt.label}</span>
                {isSelected && (
                 <CheckTickLogo />
                )}
              </li>
            );
          })}

          {/* optional empty-state */}
          {options.length === 0 && (
            <li className="px-4 py-2 text-sm text-slate-500">No options</li>
          )}
        </ul>
      )}
    </div>
  );
}

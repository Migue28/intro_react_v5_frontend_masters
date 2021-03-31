import React, { useState } from "react";

const useDropdown = (label, defaultValue, options) => {
  const [state, setState] = useState(defaultValue);
  const id = `use-dropdown ${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={(event) => setState(event.target.value)}
          onBlur={(event) => setState(event.target.value)}
          disabled={!options.length}
        >
          <option>All</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, Dropdown, setState];
};

export default useDropdown;

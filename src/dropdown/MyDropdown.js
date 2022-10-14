import React, { useState } from "react";

const MyDropdown = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="min-w-fit">
      <button
        onClick={() => setIsActive(!isActive)}
        className="px-4 py-2 bg-blue-500 rounded-lg text-gray-100 hover:bg-blue-600 hover:text-gray-100 transition-all duration-300"
      >
        {props.dropdown}
      </button>
      {isActive && (
        <ul className="absolute top-10 rounded-lg shadow w-max">
          <li className="">
            <button className="text-gray-700 px-3 py-2 hover:text-gray-700 hover:bg-gray-200">
              link 1
            </button>
          </li>
          <li>
            <button className="text-gray-700  px-3 py-2 hover:text-gray-700 hover:bg-gray-200">
              link 1
            </button>
          </li>
          <li>
            <button className="text-gray-700  px-3 py-2 hover:text-gray-700 hover:bg-gray-200">
              link 1
            </button>
          </li>
          <li>
            <button className="text-gray-700 px-3 py-2 hover:text-gray-700 hover:bg-gray-200">
              link 1
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MyDropdown;

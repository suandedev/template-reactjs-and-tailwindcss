// import React from 'react';
import * as FontAwesome from "react-icons/fa";
import React, { useState } from "react";

const MyButton = ({ cover, text, buttonStyle, iconStyle, icon, dropdown }) => {
  const [isActive, setIsActive] = useState(false);

  if (dropdown) {
    return (
      <>
        <div className={iconStyle + cover}>
          <button
            className={buttonStyle}
            onClick={() => setIsActive(!isActive)}
          >
            {text}
          </button>
          <div className="">
            {icon ? React.createElement(FontAwesome[icon]) : ""}
          </div>
          {isActive && (
            <div className="flex flex-col justify-start py-2 space-y-1 text-gray-700 bg-gray-100 rounded-b-lg">
              <button className="hover:bg-gray-200">link</button>
              <button className="hover:bg-gray-200">link</button>
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={iconStyle + cover}>
          <button
            className={buttonStyle}
          >
            {text}
          </button>
          <div className="">
            {icon ? React.createElement(FontAwesome[icon]) : ""}
          </div>
        </div>
      </>
    );
  }
};

export default MyButton;

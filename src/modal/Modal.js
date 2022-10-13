import React, { useState } from "react";
import * as FontAwesome from "react-icons/fa";

const Modal = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="m-4">
      <button
        onClick={() => setIsActive(!isActive)}
        className="text-lg capitalize font-semibold bg-blue-500 rounded-lg p-4 text-gray-100 hover:text-gray-50 hover:bg-blue-600"
      >
        modal
      </button>
      {isActive && (
        <div className="p-4 m-4 border rounded shadow space-y-4">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-lg capitalize font-semibold">modal title</h1>
            <button
              onClick={() => setIsActive(!isActive)}
              className="hover:text-gray-500"
            >
              {React.createElement(FontAwesome["FaTimes"])}
            </button>
          </div>
          <hr></hr>
          <p className="py-2 text-gray-700">modal body</p>
          <hr></hr>
          <div className="flex flex-row justify-end space-x-3">
            <button onClick={() => setIsActive(!isActive)} className="px-3 py-2 bg-red-300 rounded-lg text-gray-700 hover:text-gray-100 hover:bg-red-500 transition-all duration-300">
              close
            </button>
            <button className="px-3 py-2 bg-blue-300 rounded-lg text-gray-700 hover:text-gray-100 hover:bg-blue-500 transition-all duration-300">
              save changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

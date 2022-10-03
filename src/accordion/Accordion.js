import React, { useState } from "react";

const Accordion = ({ title, content, headClassOn, headClassOff }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item" class="mt-4">
      <div
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
        class={isActive ? headClassOn : headClassOff}
      >
        <h1>{title}</h1>
        <div class="text-xl">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content" class="m-4 text-gray-500 text-sm">{content}</div>}
    </div>
  );
};
export default Accordion;

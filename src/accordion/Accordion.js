import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const headClassOn = 'bg-sky-500 flex flex-row justify-between rounded-lg px-6 py-4 text-sky-100';
  const headClassOff = 'bg-sky-100 flex flex-row justify-between rounded-lg px-6 py-4 text-sky-500';

  return (
    <div className="accordion-item" class="mt-4">
      <div
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
        class={isActive ? headClassOn : headClassOff}
      >
        <h1>{title}</h1>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content" class="m-4 text-gray-500 text-sm">{content}</div>}
    </div>
  );
};
export default Accordion;

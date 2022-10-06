import React, { useState } from "react";

// get our fontawesome imports
import { FaAccessibleIcon } from "react-icons/fa";

const Accordion = ({
  title,
  content,
  headClassOn,
  headClassOff,
  border,
  space,
}) => {
  const [isActive, setIsActive] = useState(false);

  const mt = "mt-4";

  return (
    <div className="accordion-item" class={space + " " + border}>
      <div
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
        class={isActive ? headClassOn : headClassOff}
      >
        {/* icons */}
        <div class="flex flex-row items-center">
          <div class="mr-2">
            <FaAccessibleIcon/>
          </div>
          <div>{title}</div>
        </div>
        {/* <h1>{title}</h1> */}
        <div class="text-xl">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content" class="m-4 text-gray-500 text-sm">
          {content}
        </div>
      )}
    </div>
  );
};
export default Accordion;

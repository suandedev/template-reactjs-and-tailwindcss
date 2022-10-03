import React from "react";
import Accordion from "./Accordion";

const DefaultAccordion = () => {
  const accordionData = [
    {
      topic: "default Accordion",
      title: "Accordion Header",
      content: "this is the description of accordion",
    },
    {
      topic: "default Accordion",
      title: "Accordion Header",
      content: "this is the description of accordion",
    },
    {
      topic: "default Accordion",
      title: "Accordion Header",
      content: "this is the description of accordion",
    },
  ];

  return (
    <div class="m-4 p-4 rounded-lg shadow-lg">
      <h1 class="capitalize text-xl font-semibold">Default Accordion</h1>
      <p class="text-gray-500 ">This is default accordion</p>
      <div className="accordion" class="mt-4">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default DefaultAccordion;

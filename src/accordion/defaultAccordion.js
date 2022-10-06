import React from "react";
import Accordion from "./Accordion";

const DefaultAccordion = () => {
  const headClassOn =
    "bg-sky-500 flex flex-row justify-between rounded-lg px-6 py-4 text-sky-100";
  const headClassOff =
    "bg-sky-100 flex flex-row justify-between rounded-lg px-6 py-4 text-sky-500";
  const space = "mt-4";

  const datas = [
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      space: space,
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      space: space,
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      space: space,
    },
  ];

  return (
    <div class="m-4 p-4 rounded-lg shadow-lg">
      <h1 class="capitalize text-xl font-semibold">Default Accordion</h1>
      <p class="text-gray-500 ">This is default accordion. folder is accordion/defaultAccordion.js</p>
      <div className="accordion" class="mt-4">
        {datas.map((data) => (
          <Accordion
            title={data.title}
            content={data.content}
            headClassOn={data.headClassOn}
            headClassOff={data.headClassOff}
            space={data.space}
          />
        ))}
      </div>
    </div>
  );
};

export default DefaultAccordion;

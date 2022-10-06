import React from "react";
import Accordion from "./Accordion";

const AccordionRoundedStylish = () => {
  const headClassOn =
    "flex flex-row justify-between  px-6 py-4 text-gray-500 border-b";
  const headClassOff =
    "flex flex-row justify-between px-6 py-4 text-gray-500 ";
  const space = "mt-4";
  const contentClass = "m-4 text-gray-500  rounded-lg border";

  const datas = [
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      space: space,
      contentClass: contentClass,
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      space: space,
      contentClass: contentClass,
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      space: space,
      contentClass: contentClass,
    },
  ];

  return (
    <div class="m-4 p-4 rounded-lg shadow-lg">
      <h1 class="capitalize text-xl font-semibold">accordion rounded stylish</h1>
      <p class="text-gray-500 ">
        This is accordion rounded stylish. folder is
        accordion/AccordionRoundedStylish.js
      </p>
      <div className="accordion" class="mt-4">
        {datas.map((data) => (
          <Accordion
            title={data.title}
            content={data.content}
            headClassOn={data.headClassOn}
            headClassOff={data.headClassOff}
            space={data.space}
            contentClass={data.contentClass}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionRoundedStylish;

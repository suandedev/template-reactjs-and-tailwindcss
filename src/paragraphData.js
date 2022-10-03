import React from "react";
import Paragraph from "./Paragraph";

const ParagraphData = () => {
  const data = [
    {
      cls: "p-4 bg-red-500 rounded-lg",
      pr: "halo 1",
    },
    {
      cls: "p-4 bg-sky-500 rounded-lg",
      pr: "halo 2",
    },
    {
      cls: "p-4 rounded-lg border  border-red-300",
      pr: "halo 2",
    },
  ];

  return (
    <div className="paragraph">
      {data.map(({ cls, pr}) => (
        <Paragraph cls={cls} pr={pr} />
      ))}
    </div>
  );
};

export default ParagraphData;

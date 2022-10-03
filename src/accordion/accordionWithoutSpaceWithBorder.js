import Accordion from "./Accordion";

const AccordionWithoutSpaceWithBorder = () => {
  const headClassOn =
    "bg-sky-500 flex flex-row justify-between rounded-t-lg px-6 py-4 text-sky-100";
  const headClassOff =
    "bg-sky-100 flex flex-row justify-between rounded-lg px-6 py-4 text-sky-500";
  const border = "border border-2 border-sky-500 rounded-xl";

  const datas = [
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      border: border,
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      border: border,
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      border: border,
    },
  ];

  return (
    <div class="m-4 p-4 rounded-lg shadow-lg">
      <h1 class="capitalize text-xl font-semibold">Accordion Without Space</h1>
      <p class="text-gray-500 ">This is accordion without space</p>
      <div className="accordion" class="mt-4">
        {datas.map((data) => (
          <Accordion
            title={data.title}
            content={data.content}
            headClassOn={headClassOn}
            headClassOff={headClassOff}
            border={data.border}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionWithoutSpaceWithBorder;

import Accordion from "./Accordion";

const AccordionBordered = () => {
  const headClassOn =
    "bg-sky-500 flex flex-row justify-between rounded-t-lg px-6 py-4 text-sky-100";
  const headClassOff =
    "bg-sky-100 flex flex-row justify-between rounded-lg px-6 py-4 text-sky-500";
  const border = "border border-2 border-sky-500 rounded-xl";
  const space = 'mt-4';

  const datas = [
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      border: border,
      space: space,
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      border: border,
      space: space,
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
      headClassOn: headClassOn,
      headClassOff: headClassOff,
      border: border,
      space: space,
    },
  ];

  return (
    <div class="m-4 p-4 rounded-lg shadow-lg">
      <h1 class="capitalize text-xl font-semibold">Accordion bordered</h1>
      <p class="text-gray-500 ">This is bordered accordion</p>
      <div className="accordion" class="mt-4">
        {datas.map((data) => (
          <Accordion
            title={data.title}
            content={data.content}
            headClassOn={headClassOn}
            headClassOff={headClassOff}
            border={data.border}
            space={data.space}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionBordered;

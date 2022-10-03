import Accordion from "./Accordion";

const AccordionBordered = () => {
  const data = [
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
    },
    {
      title: "Accordion Header",
      content: "this is the description of accordion",
    },
  ];

  return (
    <div class="m-4 p-4 rounded-lg shadow-lg">
      <h1 class="capitalize text-xl font-semibold">Default Accordion</h1>
      <p class="text-gray-500 ">This is default accordion</p>
      <div className="accordion" class="mt-4">
        {data.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default AccordionBordered;

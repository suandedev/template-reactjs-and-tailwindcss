import ListGroup from "./ListGroup";

const BasicListGroup = () => {
  const datas = [
    {
      text: "list 1",
    },
    {
      text: "list 2",
    },
    {
      text: "list 3",
    },
    {
      text: "list 4",
    },
  ];
  return (
    <div className="shadow-lg rounded-lg p-4 space-y-4 m-4">
      <h1 className="capitalize font-semibold text-lg text-gray-700 ">
        Basic List Group
      </h1>
      <p className="border-b"></p>
      <ul className="border border-gray-200 rounded-lg divide-y divide-gray-200">
        {datas.map((data) => (
          <ListGroup text={data.text} />
        ))}
      </ul>
    </div>
  );
};
export default BasicListGroup;

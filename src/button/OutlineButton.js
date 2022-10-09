import MyButton from "./MyButton";

const OutlineButton = () => {
  const datas = [
    {
      buttonStyle:
        "px-4 py-2 rounded-lg border border-blue-500 text-blue-500 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
    },
    {
      buttonStyle:
        "px-4 py-2 rounded-lg border border-purple-500 text-purple-500 capitalize hover:text-purple-50 hover:bg-purple-400 transition duration-200",
      text: "secondary",
    },
    {
      buttonStyle:
        "px-4 py-2 rounded-lg border border-green-500 text-green-500 capitalize hover:text-green-50 hover:bg-green-400 transition duration-200",
      text: "Success",
    },
    {
      buttonStyle:
        "px-4 py-2 rounded-lg border border-red-500 text-red-500 capitalize hover:text-red-50 hover:bg-red-400 transition duration-200",
      text: "danger",
    },
    {
      buttonStyle:
        "px-4 py-2 rounded-lg border border-yellow-500 text-yellow-500 capitalize hover:text-yellow-50 hover:bg-yellow-400 transition duration-200",
      text: "warning",
    },
    {
      buttonStyle:
        "px-4 py-2 rounded-lg border border-indigo-500 text-indigo-500 capitalize hover:text-indigo-50 hover:bg-indigo-400 transition duration-200",
      text: "info",
    },
    {
        buttonStyle:
        "px-4 py-2 rounded-lg border border-gray-300 text-gray-500 capitalize hover:text-gray-50 hover:bg-gray-300 transition duration-200",
      text: "light",
    },
    {
        buttonStyle:
        "px-4 py-2 rounded-lg border border-gray-500 text-gray-500 capitalize hover:text-gray-50 hover:bg-gray-400 transition duration-200",
      text: "dark",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 m-4">
      <h1 className="text-lg">Buttons Light</h1>
      <div className="flex flex-row space-x-2">
        {datas.map((data) => (
          <MyButton buttonStyle={data.buttonStyle} text={data.text} />
        ))}
      </div>
    </div>
  );
};

export default OutlineButton;

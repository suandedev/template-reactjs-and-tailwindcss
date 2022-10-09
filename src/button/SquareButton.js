import MyButton from "./MyButton";

const SquareButton = () => {
  const datas = [
    {
        // primary
      buttonStyle:
        "bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
    },
    {
        // secondary
      buttonStyle:
        "bg-purple-500  px-4 py-2  text-purple-50 capitalize hover:text-purple-50 hover:bg-purple-400 transition duration-200",
      text: "secondary",
    },
    {
        // success
      buttonStyle:
        "bg-green-500 px-4 py-2 text-green-50 capitalize hover:text-green-50 hover:bg-green-400 transition duration-200",
      text: "success",
    },
    {
        // danger
      buttonStyle:
        "bg-red-500  px-4 py-2 text-red-50 capitalize hover:text-red-50 hover:bg-red-400 transition duration-200",
      text: "danger",
    },
    {
        // warning
      buttonStyle:
        "bg-yellow-500 px-4 py-2 text-yellow-50 capitalize hover:text-yellow-50 hover:bg-yellow-400 transition duration-200",
      text: "warning",
    },
    {
        // light
      buttonStyle:
        "bg-gray-200 px-4 py-2 text-gray-400 capitalize hover:text-gray-50 hover:bg-gray-400 transition duration-200",
      text: "warning",
    },
    {
        // dark
      buttonStyle:
        "bg-gray-400 px-4 py-2 text-gray-50 capitalize hover:text-gray-50 hover:bg-gray-500 transition duration-200",
      text: "warning",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 m-4">
      <h1 className="text-lg">Buttons Square</h1>
      <div className="flex flex-row space-x-2">
        {datas.map((data) => (
          <MyButton buttonStyle={data.buttonStyle} text={data.text} />
        ))}
      </div>
    </div>
  );
};

export default SquareButton;

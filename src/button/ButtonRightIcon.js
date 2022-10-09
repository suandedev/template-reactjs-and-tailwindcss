import MyButton from "./MyButton";

const ButtonRightIcon = () => {
  const datas = [
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
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

export default ButtonRightIcon;

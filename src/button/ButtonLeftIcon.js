import MyButton from "./MyButton";

const ButtonLeftIcon = () => {
  const datas = [
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
      icon: "FaBeer",
      iconStyle:
        "flex flex-row-reverse items-center space-x-1 bg-blue-500 hover:text-blue-50 hover:bg-blue-400 pr-3 ",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
      icon: "FaBeer",
      iconStyle:
        "flex flex-row-reverse items-center space-x-1 bg-blue-500 hover:text-blue-50 hover:bg-blue-400 pl-3 ",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
      icon: "FaBeer",
      iconStyle:
        "flex flex-row-reverse items-center space-x-1 bg-blue-500 hover:text-blue-50 hover:bg-blue-400 pl-3 ",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
      icon: "FaBeer",
      iconStyle:
        "flex flex-row-reverse items-center space-x-1 bg-blue-500 hover:text-blue-50 hover:bg-blue-400 pl-3 ",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
      icon: "FaBeer",
      iconStyle:
        "flex flex-row-reverse items-center space-x-1 bg-blue-500 hover:text-blue-50 hover:bg-blue-400 pl-3 ",
    },
    {
      // primary
      buttonStyle:
        " bg-blue-500 px-4 py-2 text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "primary",
      icon: "FaBeer",
      iconStyle:
        "flex flex-row-reverse items-center space-x-1 bg-blue-500 hover:text-blue-50 hover:bg-blue-400 pl-3 ",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 m-4">
      <h1 className="text-lg">Buttons left icon</h1>
      <div className="flex flex-row space-x-2">
        {datas.map((data) => (
          <MyButton
            buttonStyle={data.buttonStyle}
            text={data.text}
            icon={data.icon}
            iconStyle={data.iconStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonLeftIcon;

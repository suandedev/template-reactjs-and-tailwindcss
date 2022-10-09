import MyButton from "./MyButton";

const ButtonSize = () => {
  const datas = [
    {
        // large
      buttonStyle:
        "bg-blue-500 text-2xl px-6 py-3 rounded-lg text-blue-50 capitalize hover:text-blue-50 hover:bg-blue-400 transition duration-200",
      text: "large",
    },
    {
        // meduim
      buttonStyle:
        "bg-purple-500 text-xl px-4 py-2 rounded-lg  text-purple-50 capitalize hover:text-purple-50 hover:bg-purple-400 transition duration-200",
      text: "medium",
    },
    {
        // default
      buttonStyle:
        "bg-green-500 px-4 py-2 rounded-lg text-green-50 capitalize hover:text-green-50 hover:bg-green-400 transition duration-200",
      text: "default",
    },
    {
        // small
      buttonStyle:
        "bg-red-500 text-sm px-4 py-2 rounded-lg text-red-50 capitalize hover:text-red-50 hover:bg-red-400 transition duration-200",
      text: "small",
    },
    {
        // extra small
      buttonStyle:
        "bg-yellow-500 text-xs px-4 py-2 rounded-lg text-yellow-50 capitalize hover:text-yellow-50 hover:bg-yellow-400 transition duration-200",
      text: "extra small",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 m-4">
      <h1 className="text-lg">Buttons Size</h1>
      <div className="flex flex-row space-x-2">
        {datas.map((data) => (
          <MyButton buttonStyle={data.buttonStyle} text={data.text} />
        ))}
      </div>
    </div>
  );
};

export default ButtonSize;

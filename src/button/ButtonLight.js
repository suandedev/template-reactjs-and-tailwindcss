import MyButton from "./MyButton";

const ButtonLight = () => {
  const datas = [
    {
      cover: "bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-400",
      buttonStyle: "text-blue-500 capitalize",
      text: "primary",
    },
    {
      cover: "bg-purple-100 px-4 py-2 rounded-lg hover:bg-purple-400",
      buttonStyle: "text-purple-500 capitalize",
      text: "secondary",
    },
    {
      cover: "bg-green-100 px-4 py-2 rounded-lg hover:bg-green-400",
      buttonStyle: "text-green-500 capitalize",
      text: "Success",
    },
    {
      cover: "bg-red-100 px-4 py-2 rounded-lg hover:bg-red-400",
      buttonStyle: "text-red-500 capitalize",
      text: "danger",
    },
    {
      cover: "bg-yellow-100 px-4 py-2 rounded-lg hover:bg-yellow-400",
      buttonStyle: "text-yellow-500 capitalize",
      text: "warning",
    },
    {
      cover: "bg-indigo-100 px-4 py-2 rounded-lg hover:bg-indigo-400",
      buttonStyle: "text-indigo-500 capitalize",
      text: "info",
    },
    {
      cover: "bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-400",
      buttonStyle: "text-gray-700 capitalize",
      text: "light",
    },
    {
      cover: "bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400",
      buttonStyle: "text-gray-500 capitalize",
      text: "dark",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 m-4">
      <h1 className="text-lg">Buttons Light</h1>
      <div className="flex flex-row space-x-2">
        {datas.map((data) => (
          <MyButton
            cover={data.cover}
            buttonStyle={data.buttonStyle}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonLight;

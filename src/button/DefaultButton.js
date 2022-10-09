import MyButton from "./MyButton";

const DefaultButton = () => {
  const datas = [
    {
      cover: "bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400",
      buttonStyle: "text-blue-50 capitalize",
      text: "primary",
    },
    {
      cover: "bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-400",
      buttonStyle: "text-purple-50 capitalize",
      text: "secondary",
    },
    {
      cover: "bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400",
      buttonStyle: "text-green-50 capitalize",
      text: "Success",
    },
    {
      cover: "bg-red-500 px-4 py-2 rounded-lg hover:bg-red-400",
      buttonStyle: "text-red-50 capitalize",
      text: "danger",
    },
    {
      cover: "bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-400",
      buttonStyle: "text-yellow-50 capitalize",
      text: "warning",
    },
    {
      cover: "bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-400",
      buttonStyle: "text-indigo-50 capitalize",
      text: "info",
    },
    {
      cover: "bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400",
      buttonStyle: "text-gray-700 capitalize",
      text: "light",
    },
    {
      cover: "bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-400",
      buttonStyle: "text-gray-50 capitalize",
      text: "dark",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 m-4">
      <h1 className="text-lg">Default Buttons</h1>
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

export default DefaultButton;

import MyButton from "./MyButton";

const DropdownButton = () => {
  const datas = [
    {
      buttonStyle: "bg-blue-500 px-4 py-2 rounded-t-lg hover:bg-blue-400 text-blue-50 capitalize",
      text: "primary",
    },
    {
      buttonStyle: "bg-purple-500 px-4 py-2 rounded-t-lg hover:bg-purple-400 text-purple-50 capitalize",
      text: "secondary",
    },
    {
      buttonStyle: "bg-green-500 px-4 py-2 rounded-t-lg hover:bg-green-400 text-green-50 capitalize",
      text: "Success",
    },
    {
      buttonStyle: "bg-red-500 px-4 py-2 rounded-t-lg hover:bg-red-400 text-red-50 capitalize",
      text: "danger",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 m-4">
      <h1 className="text-lg">dropdown Buttons</h1>
      <div className="flex flex-row space-x-2">
        {datas.map((data) => (
          <MyButton
            cover={data.cover}
            buttonStyle={data.buttonStyle}
            text={data.text}
            dropdown={true}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownButton;

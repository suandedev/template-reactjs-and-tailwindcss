import Badge from "./Badge";

const CircleBagde = () => {
  const datas = [
    {
      text: "1",
      bg: "bg-sky-500",
      color: "text-gray-100",
      rounded: "rounded-full w-7 h-7 text-center",
    },
    {
      text: "2",
      bg: 'bg-purple-500',
      color: "text-gray-100",
      rounded: "rounded-full w-7 h-7 text-center",
      border: "border-2 border-purple-500",
    },
    {
      text: "3",
      bg: 'bg-green-500',
      color: "text-gray-100",
      rounded: "rounded-full w-7 h-7 text-center",
    },
    {
      text: "4",
      bg: 'bg-red-500',
      color: "text-gray-100",
      rounded: "rounded-full w-7 h-7 text-center",
      border: "border-2 border-red-500",
    },
    {
      text: "5",
      bg: 'bg-indigo-500',
      color: "text-indigo-50",
      rounded: "rounded-full w-7 h-7 text-center",
    },
    {
      text: "6",
      bg: 'bg-yellow-500',
      color: "text-yellow-50",
      rounded: "rounded-full w-7 h-7 text-center",
    },
    {
      text: "7",
      bg: 'bg-gray-500',
      color: "text-gray-50",
      rounded: "rounded-full w-7 h-7 text-center",
    },
  ];

  return (
    <div className="flex flex-row space-x-3 justify-evenly m-4">
      {datas.map((data) => (
        <Badge
          text={data.text}
          size={data.size}
          color={data.color}
          bg={data.bg}
          rounded={data.rounded}
          border={data.border}
        />
      ))}
    </div>
  );
};

export default CircleBagde;

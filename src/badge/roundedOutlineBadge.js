import Badge from "./Badge";

const RoundedOutlineBadge = () => {
  const datas = [
    {
      text: "primary",
      size: "text-sm",
      color: "text-sky-500",
      rounded: "rounded-full px-2 py-1",
      border: 'border-2 border-sky-500',
    },
    {
      text: "secondary",
      size: "text-sm",
      color: "text-purple-500",
      rounded: "rounded-full px-2 py-1",
      border: 'border-2 border-purple-500',
    },
    {
      text: "success",
      size: "text-sm",
      color: "text-green-500",
      rounded: "rounded-full px-2 py-1",
      border: 'border-2 border-green-500',
    },
    {
      text: "Danger",
      size: "text-sm",
      color: "text-red-500",
      rounded: "rounded-full px-2 py-1",
      border: 'border-2 border-red-500',
    },
    {
        text: "info",
        size: "text-sm",
        color: "text-indigo-500",
        rounded: "rounded-full px-2 py-1",
        border: 'border-2 border-indigo-500',
      },
    {
      text: "warning",
      size: "text-sm",
      color: "text-yellow-500",
      rounded: "rounded-full px-2 py-1",
      border: 'border-2 border-yellow-500',
    },
    {
        text: "dark",
        size: "text-sm",
        color: "text-gray-500",
        rounded: "rounded-full px-2 py-1",
        border: 'border-2 border-gray-500',
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

export default RoundedOutlineBadge;

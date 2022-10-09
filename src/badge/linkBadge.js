import Badge from "./Badge";

const LinkBadge = () => {
  const datas = [
    {
      text: "primary",
      size: "text-sm",
      color: "text-sky-50",
      bg: "bg-sky-500 font-semibold",
      rounded: "rounded-full px-2 py-1",
    },
    {
      text: "secondary",
      size: "text-sm",
      color: "text-purple-50",
      bg: "bg-purple-500",
      rounded: "rounded-full px-2 py-1",
    },
    {
      text: "success",
      size: "text-sm",
      color: "text-green-50",
      bg: "bg-green-500",
      rounded: "rounded-full px-2 py-1",
    },
    {
      text: "Danger",
      size: "text-sm",
      color: "text-red-50",
      bg: "bg-red-500",
      rounded: "rounded-full px-2 py-1",
    },
    {
        text: "info",
        size: "text-sm",
        color: "text-indigo-50",
        bg: "bg-indigo-500",
        rounded: "rounded-full px-2 py-1",
      },
    {
      text: "warning",
      size: "text-sm",
      color: "text-yellow-50",
      bg: "bg-yellow-500",
      rounded: "rounded-full px-2 py-1",
    },
    {
        text: "dark",
        size: "text-sm",
        color: "text-gray-50",
        bg: "bg-gray-500",
        rounded: "rounded-full px-2 py-1",
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
          link={true}
        />
      ))}
    </div>
  );
};

export default LinkBadge;

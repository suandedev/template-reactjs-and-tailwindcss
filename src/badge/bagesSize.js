import Badge from "./Badge";

const BadgesSize = () => {
  const datas = [
    {
      text: "primary",
      size: "text-xs",
      color: "text-sky-500",
      bg: "bg-sky-200",
      rounded: "rounded-md px-1",
    },
    {
      text: "primary",
      size: "text-sm",
      color: "text-sky-500",
      bg: "bg-sky-200",
      rounded: "rounded-md px-1",
    },
    {
      text: "secondary",
      size: "text-lg",
      color: "text-purple-500",
      bg: "bg-purple-200",
      rounded: "rounded-md px-1",
    },
    {
        text: "Danget",
        size: "text-lg",
        color: "text-red-500",
        bg: "bg-red-200",
        rounded: "rounded-md px-1",
      },
      {
        text: "warning",
        size: "text-lg",
        color: "text-yellow-500",
        bg: "bg-yellow-200",
        rounded: "rounded-md px-1",
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
        />
      ))}
    </div>
  );
};

export default BadgesSize;

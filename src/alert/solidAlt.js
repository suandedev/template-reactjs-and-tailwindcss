import Alert from "./Alert";

const SolidAlt = () => {
  const datas = [
    {
      icon: "smile",
      bg: "bg-blue-400",
      color: "text-gray-100",
      rounded: "lg",
      border: 'border-l-4 border-blue-700',
      message: "Welcome! message has been sent",
    },
    {
      icon: "like",
      bg: "bg-purple-400",
      color: "text-gray-100",
      rounded: "lg",
      border: 'border-l-4 border-purple-700',
      message: "Done! Your profile photo updated. ",
    },
    {
      icon: "success",
      bg: "bg-green-400",
      color: "text-gray-100",
      rounded: "lg",
      border: 'border-l-4 border-green-700',
      message: "Success! Message has been sent. ",
    },
    {
      icon: "info",
      bg: "bg-sky-400",
      color: "text-gray-100",
      rounded: "lg",
      border: 'border-l-4 border-sky-700',
      message: "Info! You have got 5 new email. ",
    },
    {
      icon: "warning",
      bg: "bg-yellow-400",
      color: "text-gray-100",
      rounded: "lg",
      border: 'border-l-4 border-yellow-700',
      message: "Warning! Something went wrong. Please check. ",
    },
    {
      icon: "error",
      bg: "bg-red-400",
      color: "text-gray-100",
      rounded: "lg",
      border: 'border-l-4 border-red-700',
      message: "Error! Message sending failed. ",
    },
    {
      icon: "error",
      bg: "bg-gray-400",
      color: "text-gray-100",
      rounded: "lg",
      border: 'border-l-4 border-gray-700',
      message: "Error! You successfully read this important alert message. ",
    },
  ];

  return (
    <div className="alert">
      <h1 className="text-xl capitalize m-5">solit alert alt </h1>
      {datas.map((data) => (
        <Alert
          icon={data.icon}
          message={data.message}
          bg={data.bg}
          color={data.color}
          rounded={data.rounded}
          border={data.border}
        />
      ))}
    </div>
  );
};

export default SolidAlt;

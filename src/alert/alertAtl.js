import Alert from "./Alert";

const AlertAlt = () => {
  const datas = [
    {
      icon: "smile",
      bg: "bg-blue-100",
      color: "text-blue-500",
      rounded: "lg",
      border: 'border-l-4 border-blue-500',
      message: "Welcome! message has been sent",
    },
    {
      icon: "like",
      bg: "bg-purple-100",
      color: "text-purple-500",
      rounded: "lg",
      border: 'border-l-4 border-purple-500',
      message: "Done! Your profile photo updated. ",
    },
    {
      icon: "success",
      bg: "bg-green-100",
      color: "text-green-500",
      rounded: "lg",
      border: 'border-l-4 border-green-500',
      message: "Success! Message has been sent. ",
    },
    {
      icon: "info",
      bg: "bg-sky-100",
      color: "text-sky-500",
      rounded: "lg",
      border: 'border-l-4 border-sky-500',
      message: "Info! You have got 5 new email. ",
    },
    {
      icon: "warning",
      bg: "bg-yellow-100",
      color: "text-yellow-500",
      rounded: "lg",
      border: 'border-l-4 border-yellow-500',
      message: "Warning! Something went wrong. Please check. ",
    },
    {
      icon: "error",
      bg: "bg-red-100",
      color: "text-red-500",
      rounded: "lg",
      border: 'border-l-4 border-red-500',
      message: "Error! Message sending failed. ",
    },
    {
      icon: "error",
      bg: "bg-gray-100",
      color: "text-gray-500",
      rounded: "lg",
      border: 'border-l-4 border-gray-500',
      message: "Error! You successfully read this important alert message. ",
    },
  ];

  return (
    <div className="alert">
      <h1 className="text-xl capitalize m-5">alert alt</h1>
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

export default AlertAlt;

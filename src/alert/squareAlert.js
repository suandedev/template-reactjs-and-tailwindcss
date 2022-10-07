import Alert from "./Alert";

const SquareAlert = () => {
  const datas = [
    {
      icon: "smile",
      bg: "bg-blue-500",
      color: "text-gray-50",
      rounded: "",
      message: "Welcome! message has been sent",
    },
    {
      icon: "like",
      bg: "bg-purple-500",
      color: "text-gray-50",
      rounded: "",
      message: "Done! Your profile photo updated. ",
    },
    {
      icon: "success",
      bg: "bg-green-500",
      color: "text-gray-50",
      rounded: "",
      message: "Success! Message has been sent. ",
      iconClose: "",
    },
    {
      icon: "info",
      bg: "bg-sky-500",
      color: "text-gray-50",
      rounded: "",
      message: "Info! You have got 5 new email. ",
    },
    {
      icon: "warning",
      bg: "bg-yellow-500",
      color: "text-gray-50",
      rounded: "",
      message: "Warning! Something went wrong. Please check. ",
    },
    {
      icon: "error",
      bg: "bg-red-500",
      color: "text-gray-50",
      rounded: "",
      message: "Error! Message sending failed. ",
    },
    {
      icon: "error",
      bg: "bg-gray-500",
      color: "text-gray-50",
      rounded: "",
      message: "Error! You successfully read this important alert message. ",
    },
  ];

  return (
    <div className="alert">
      {datas.map((data) => (
        <Alert
          icon={data.icon}
          message={data.message}
          bg={data.bg}
          color={data.color}
          rounded={data.rounded}
        />
      ))}
    </div>
  );
};

export default SquareAlert;

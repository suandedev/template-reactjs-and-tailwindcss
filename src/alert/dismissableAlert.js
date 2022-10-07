import Alert from "./Alert";

const DismissableAlert = () => {
  const datas = [
    {
      icon: "smile",
      bg: "bg-blue-50",
      color: "text-blue-500",
      rounded: "lg",
      message: "Welcome! message has been sent",
    },
    {
      icon: "like",
      bg: "bg-purple-50",
      color: "text-purple-500",
      rounded: "lg",
      message: "Done! Your profile photo updated. ",
    },
    {
      icon: "success",
      bg: "bg-green-50",
      color: "text-green-500",
      rounded: "lg",
      message: "Success! Message has been sent. ",
    },
    {
      icon: "info",
      bg: "bg-sky-50",
      color: "text-sky-500",
      rounded: "lg",
      message: "Info! You have got 5 new email. ",
    },
    {
      icon: "warning",
      bg: "bg-yellow-50",
      color: "text-yellow-500",
      rounded: "lg",
      message: "Warning! Something went wrong. Please check. ",
    },
    {
      icon: "error",
      bg: "bg-red-50",
      color: "text-red-500",
      rounded: "lg",
      message: "Error! Message sending failed. ",
    },
    {
      icon: "error",
      bg: "bg-gray-50",
      color: "text-gray-500",
      rounded: "lg",
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

export default DismissableAlert;

import Alert from "./Alert";

const SolidColorAlert = () => {
  const datas = [
    {
      icon: "smile",
      bg: "bg-blue-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Welcome! message has been sent",
    },
    {
      icon: "like",
      bg: "bg-purple-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Done! Your profile photo updated. ",
    },
    {
      icon: "success",
      bg: "bg-green-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Success! Message has been sent. ",
      iconClose: "",
    },
    {
      icon: "info",
      bg: "bg-sky-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Info! You have got 5 new email. ",
    },
    {
      icon: "warning",
      bg: "bg-yellow-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Warning! Something went wrong. Please check. ",
    },
    {
      icon: "error",
      bg: "bg-red-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Error! Message sending failed. ",
    },
    {
      icon: "error",
      bg: "bg-gray-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Error! You successfully read this important alert message. ",
    },
  ];

  return (
    <div className="alert">
      <h1 className="text-xl capitalize m-5">colid color alert </h1>
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

export default SolidColorAlert;

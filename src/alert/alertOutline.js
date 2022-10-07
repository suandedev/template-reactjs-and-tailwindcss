import Alert from "./Alert";

const AlertOutline = () => {
  const datas = [
    {
      icon: "smile",
      border: "border-blue-500 border-2",
      color: "text-blue-500",
      rounded: "lg",
      message: "Welcome! message has been sent",
    },
    {
      icon: "like",
      border: "border-purple-500 border-2",
      color: "text-purple-500",
      rounded: "lg",
      message: "Done! Your profile photo updated. ",
    },
    {
      icon: "success",
      border: "border-green-500 border-2",
      color: "text-green-500",
      rounded: "lg",
      message: "Success! Message has been sent. ",
    },
    {
      icon: "info",
      border: "border-sky-500 border-2",
      color: "text-sky-500",
      rounded: "lg",
      message: "Info! You have got 5 new email. ",
    },
    {
      icon: "warning",
      border: "border-yellow-500 border-2",
      color: "text-yellow-500",
      rounded: "lg",
      message: "Warning! Something went wrong. Please check. ",
    },
    {
      icon: "error",
      border: "border-red-500 border-2",
      color: "text-red-500",
      rounded: "lg",
      message: "Error! Message sending failed. ",
    },
    {
      icon: "error",
      border: "border-gray-500 border-2",
      color: "text-gray-500",
      rounded: "lg",
      message: "Error! You successfully read this important alert message. ",
    },
  ];

  return (
    <div className="alert">
      <h1 className="text-xl capitalize m-5">alert outline</h1>
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

export default AlertOutline;

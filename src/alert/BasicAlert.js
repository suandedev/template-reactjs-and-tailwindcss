import Alert from "./Alert";

const BasicAlert = () => {
  const datas = [
    {
      icon: "smile",
      bg: "bg-blue-200",
      color: "text-blue-400",
      rounded: "lg",
      message: "Welcome! message has been sent",
    },
    {
      icon: "like",
      bg: "bg-purple-200",
      color: "text-purple-400",
      rounded: "lg",
      message: "Done! Your profile photo updated. ",
    },
    {
      icon: "success",
      bg: "bg-green-200",
      color: "text-green-400",
      rounded: "lg",
      message: "Success! Message has been sent. ",
      iconClose: "",
    },
    {
      icon: "info",
      bg: "bg-sky-200",
      color: "text-sky-400",
      rounded: "lg",
      message: "Info! You have got 5 new email. ",
    },
    {
      icon: "warning",
      bg: "bg-yellow-200",
      color: "text-yellow-400",
      rounded: "lg",
      message: "Warning! Something went wrong. Please check. ",
    },
    {
      icon: "error",
      bg: "bg-red-200",
      color: "text-red-400",
      rounded: "lg",
      message: "Error! Message sending failed. ",
    },
    {
      icon: "error",
      bg: "bg-gray-200",
      color: "text-gray-400",
      rounded: "lg",
      message: "Error! You successfully read this important alert message. ",
    },
    {
      icon: "error",
      bg: "bg-gray-100",
      color: "text-gray-400",
      rounded: "lg",
      message: "Error! You successfully read this message.. ",
    },
  ];

  return (
    <div className="alert">
      <h1 className="text-xl capitalize m-5">basic alert</h1>
      {datas.map((data) => (
        <Alert
          icon={data.icon}
          iconStatus={true}
          message={data.message}
          bg={data.bg}
          color={data.color}
          rounded={data.rounded}
        />
      ))}
    </div>
  );
};

export default BasicAlert;

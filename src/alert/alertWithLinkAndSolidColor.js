import Alert from "./Alert";

const AlertWithLinkANdSolidColor = () => {
  const datas = [
    {
      icon: "smile",
      bg: "bg-blue-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Welcome! message has been sent",
      link: 'upgrade',
      linkStyle: 'text-blue-500 bg-gray-100 rounded-lg px-2',
    },
    {
      icon: "like",
      bg: "bg-purple-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Done! Your profile photo updated. ",
      link: 'upgrade',
      linkStyle: 'text-purple-500 bg-gray-100 rounded-lg px-2',
    },
    {
      icon: "success",
      bg: "bg-green-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Success! Message has been sent. ",
      link: 'upgrade',
      linkStyle: 'text-green-500 bg-gray-100 rounded-lg px-2',
    },
    {
      icon: "info",
      bg: "bg-sky-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Info! You have got 5 new email. ",
      link: 'upgrade',
      linkStyle: 'text-sky-500 bg-gray-100 rounded-lg px-2',
    },
    {
      icon: "warning",
      bg: "bg-yellow-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Warning! Something went wrong. Please check. ",
      link: 'upgrade',
      linkStyle: 'text-yellow-500 bg-gray-100 rounded-lg px-2',
    },
    {
      icon: "error",
      bg: "bg-red-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Error! Message sending failed. ",
      link: 'upgrade',
      linkStyle: 'text-red-500 bg-gray-100 rounded-lg px-2',
    },
    {
      icon: "error",
      bg: "bg-gray-500",
      color: "text-gray-50",
      rounded: "lg",
      message: "Error! You successfully read this important alert message. ",
      link: 'upgrade',
      linkStyle: 'text-gray-500 bg-gray-100 rounded-lg px-2',
    },
  ];

  return (
    <div className="alert">
      <h1 className="text-xl capitalize m-5">alert with link and solid</h1>
      {datas.map((data) => (
        <Alert
          icon={data.icon}
          message={data.message}
          bg={data.bg}
          color={data.color}
          rounded={data.rounded}
          link={data.link}
          linkStyle={data.linkStyle}
        />
      ))}
    </div>
  );
};

export default AlertWithLinkANdSolidColor;

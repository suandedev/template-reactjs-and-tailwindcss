import Alert from "./Alert";

const AlertWithLink = () => {
  const datas = [
    {
      icon: "smile",
      bg: "bg-blue-50",
      color: "text-blue-500",
      rounded: "lg",
      message: "WOW! Eveything looks OK.",
      link: 'Please check this one as well',
      linkStyle: 'text-gray-500 text-sm hover:text-gray-800',
    },
    {
      icon: "like",
      bg: "bg-purple-50",
      color: "text-purple-500",
      rounded: "lg",
      message: "WOW! Eveything looks OK",
      link: 'Please check this one as well',
      linkStyle: 'text-gray-500 text-sm hover:text-gray-800',
    },
    {
      icon: "success",
      bg: "bg-green-50",
      color: "text-green-500",
      rounded: "lg",
      message: "WOW! Eveything looks OK. ",
      link: 'Please check this one as well',
      linkStyle: 'text-gray-500 text-sm hover:text-gray-800',
    },
    {
      icon: "info",
      bg: "bg-sky-50",
      color: "text-sky-500",
      rounded: "lg",
      message: "Hey! Take a quick look. ",
      link: 'Please check this one as well',
      linkStyle: 'text-gray-500 text-sm hover:text-gray-800',
    },
    {
      icon: "warning",
      bg: "bg-yellow-50",
      color: "text-yellow-500",
      rounded: "lg",
      message: "Warning! Why you did it to me!",
      link: 'Please check this one as well',
      linkStyle: 'text-gray-500 text-sm hover:text-gray-800',
    },
    {
      icon: "error",
      bg: "bg-red-50",
      color: "text-red-500",
      rounded: "lg",
      message: "Error! Something Went wrong",
      link: 'Please check this one as well',
      linkStyle: 'text-gray-500 text-sm hover:text-gray-800',
    },
    {
      icon: "error",
      bg: "bg-gray-50",
      color: "text-gray-500",
      rounded: "lg",
      message: "Error! Something Went wrong",
      link: 'Please check this one as well',
      linkStyle: 'text-gray-500 text-sm hover:text-gray-800',
    },
  ];

  return (
    <div className="alert">
      <h1 className="text-xl capitalize m-5">alert with link</h1>
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

export default AlertWithLink;

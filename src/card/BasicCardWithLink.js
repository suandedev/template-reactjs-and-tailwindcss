const BasicCardWithLink = (props) => {
  return (
    <div className="m-4 rounded-lg space-y-2 shadow-lg ">
      <h1 className="text-gray-700 p-6 text-lg font-semibold capitalize border-b">
        {props.title}
      </h1>
      <div className="flex flex-col justify-center">
        <p className="text-gray-500 p-6 text-sm">{props.content}</p>
        <button className="text-gray-100 hover:text-blue-100 capitalize bg-blue-500 hover:bg-blue-600 p-3 rounded-lg text-sm m-6">
          {props.link}
        </button>
      </div>
      <p className="text-gray-500 text-center p-6 border-t text-sm capitalize">
        {props.footer}
      </p>
    </div>
  );
};

export default BasicCardWithLink;

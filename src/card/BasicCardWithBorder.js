const BasicCardWithBorder = (props) => {
  return (
    <div className="m-4 rounded-lg space-y-2 shadow-lg ">
      <h1 className="text-gray-700 p-6 text-lg font-semibold capitalize border-b">
        {props.title}
      </h1>
      <p className="text-gray-500 p-6 text-sm">{props.content}</p>
      <div className="flex flex-row justify-between border-t p-6 items-center">
        <span className="text-gray-500 block text-sm capitalize">{props.footer}</span>
        <button className="text-gray-100 hover:text-blue-100 capitalize bg-blue-500 hover:bg-blue-600 p-3 rounded-lg text-sm">
          {props.link}
        </button>
      </div>
    </div>
  );
};

export default BasicCardWithBorder;

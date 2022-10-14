const MediaObject = (props) => {
  return (
    <div className="p-4 flex flex-row space-x-2 w-full">
      <div className={"flex " + props.alignImg}>
        <img
          className="w-24 h-24 object-cover object-center rounded-lg"
          src={props.img}
          alt="img 1"
        ></img>
      </div>
      <div className="w-10/12 flex flex-col space-y-2">
        <h2 className="text-gray-700 text-lg capitalize">{props.head}</h2>
        <p className="text-gray-600 text-sm text-ellipsis">{props.content}</p>
      </div>
    </div>
  );
};

export default MediaObject;

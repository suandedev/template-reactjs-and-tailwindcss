import MediaObject from "./MediaObject";

const BasicMediaObject = (props) => {

  return (
    <div className="m-4 rounded-lg shadow-lg">
      <h1 className="text-gray-700 font-semibold text-lg capitalize p-4">
        basic Media Object
      </h1>
      <p className="border-b border-b-gray-200"></p>
      <MediaObject
        head={"Media Object"}
        img={"img/img1.jpg"}
        content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor, temporibus earum officiis accusamus natus! Est, quis dignissimos ipsa ut fuga ea accusantium quae earum accusamus porro vitae totam at?"}
      />
      <MediaObject
        head={"Media Object"}
        img={"img/img2.jpg"}
        content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor, temporibus earum officiis accusamus natus! Est, quis dignissimos ipsa ut fuga ea accusantium quae earum accusamus porro vitae totam at?"}
      />
    </div>
  );
};

export default BasicMediaObject;

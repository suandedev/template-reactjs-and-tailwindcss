import MediaObject from "./MediaObject";

const AlignBottomMediaObject = (props) => {

  return (
    <div className="m-4 rounded-lg shadow-lg">
      <h1 className="text-gray-700 font-semibold text-lg capitalize p-4">
        align bottom Media Object
      </h1>
      <p className="border-b border-b-gray-200"></p>
      <MediaObject
        head={"Media Object"}
        img={"img/img1.jpg"}
        alignImg={'items-end'} 
        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad sunt esse incidunt vero rem veniam reiciendis deleniti, impedit totam sed adipisci ipsa officiis sequi animi placeat quos harum autem neque pariatur, consequuntur quae iusto quas veritatis. Maiores eius ratione dicta ut minus, in veritatis quia quo? Mollitia ex est omnis sit, laborum commodi amet ipsam error inventore tempora eos atque. Dolor, eius inventore a, dolores amet nam aliquid dolore adipisci maxime ipsum consequuntur deleniti? Maxime omnis quam qui in!"}
      />
      <MediaObject
        head={"Media Object"}
        img={"img/img2.jpg"}
        alignImg={'items-end'} 
        content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad sunt esse incidunt vero rem veniam reiciendis deleniti, impedit totam sed adipisci ipsa officiis sequi animi placeat quos harum autem neque pariatur, consequuntur quae iusto quas veritatis. Maiores eius ratione dicta ut minus, in veritatis quia quo? Mollitia ex est omnis sit, laborum commodi amet ipsam error inventore tempora eos atque. Dolor, eius inventore a, dolores amet nam aliquid dolore adipisci maxime ipsum consequuntur deleniti? Maxime omnis quam qui in!"}
      />
    </div>
  );
};

export default AlignBottomMediaObject;

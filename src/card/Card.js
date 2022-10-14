const MyCard = () => {
    return(
        <div className="m-4 rounded-lg space-y-6 shadow-lg p-6">
            <h1 className="text-gray-700 text-lg font-semibold capitalize">Card title</h1>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere id corrupti iste voluptatibus dolores voluptatum dolor voluptates debitis itaque perferendis officiis, libero inventore eaque voluptatem veritatis magnam adipisci officia, possimus eius aspernatur aliquid tempore fuga pariatur? Facere sint provident doloremque ut deserunt maiores nisi architecto ipsam quo, non et dolore porro consequatur fugiat vitae ullam repudiandae cupiditate quaerat commodi adipisci numquam impedit praesentium eaque. Rerum non eligendi saepe cupiditate.</p>
            <div className="flex flex-row justify-between">
                <span className="text-gray-500 text-sm capitalize">card footer</span>
                <button className="text-gray-500 hover:text-blue-500 capitalize">card link</button>
            </div>
        </div>
    );
};

export default MyCard;
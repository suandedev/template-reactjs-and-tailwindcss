const BasicCard = (props) => {
    return(
        <div className="m-4 rounded-lg space-y-6 shadow-lg p-6">
            <h1 className="text-gray-700 text-lg font-semibold capitalize">{props.title}</h1>
            <p className="text-gray-500 text-sm">{props.content}</p>
            <div className="flex flex-row justify-between">
                <span className="text-gray-500 text-sm capitalize">{props.footer}</span>
                <button className="text-gray-500 hover:text-blue-500 capitalize">{props.link}</button>
            </div>
        </div>
    );
};

export default BasicCard;
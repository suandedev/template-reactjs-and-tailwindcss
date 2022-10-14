const ButtonGroup = ({text1, text2, text3}) => {

 return(
    <div className="rounded-lg shadow-lg mx-2 p-4 space-y-2">
        <h1 className="text-lg capitalize font-semibold text-gray-700">button Group</h1>
        <p className="text-sm text-gray-600 pb-4">Default button group</p>
        <p className="border-t"></p>
        <div>
            <button className="bg-blue-500 px-4 py-2 rounded-l-lg text-gray-100 capitalize text-sm hover:bg-blue-600 hover:text-gray-50 transition-all duration-300">{text1}</button>
            <button className="bg-blue-500 px-4 py-2 text-gray-100 text-sm hover:bg-blue-600 hover:text-gray-50 transition-all duration-300">{text2}</button>
            <button className="bg-blue-500 px-4 py-2 text-gray-100 text-sm rounded-r-lg hover:bg-blue-600 hover:text-gray-50 transition-all duration-300">{text3}</button>
        </div>
    </div>
 );
};

export default ButtonGroup;
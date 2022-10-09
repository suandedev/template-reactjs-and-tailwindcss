
import * as icons from "react-icons/all";
import ComponentWithIcon from "../icon/ComponentWithIcon";


const MyButton = ({cover, text, buttonStyle}) => {
    return(
        <div className={cover}>
            <button className={buttonStyle}>{text}</button> 
            {/* <ComponentWithIcon comboName={FaBeer}/> */}
        </div>
    );
};

export default MyButton;
import React from 'react';
import * as FontAwesome from 'react-icons/fa';

const MyButton = ({cover, text, buttonStyle, iconStyle,icon}) => {
    return(
        <div className={iconStyle + cover }>
            <button className={buttonStyle}>{text}</button> 
            <div className=''>{ (icon) ? React.createElement(FontAwesome[icon]) : ''}</div>
        </div>
    );
};

export default MyButton;
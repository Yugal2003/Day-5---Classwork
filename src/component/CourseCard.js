import React, { useState } from "react";

import './CourseCard.css';

const CourseCard = ({name,hour}) =>{

    const [hourValue,sethourValue] = useState(hour);

    return(
        <div className="create_div">
            <div>  
                <p className="ptag">Subjected Name : {name}</p>
                <p className="ptag">Subjected Hour : {hourValue}</p>
            </div>

            <div className="div_style">
                <button className="btn1" onClick={()=>{sethourValue(parseInt(hourValue)+1)}}>+</button>
                <button className="btn1" onClick={()=>{sethourValue(parseInt(hourValue)-1)}}>-</button>
            </div>
        </div>
    );
}

export default CourseCard;

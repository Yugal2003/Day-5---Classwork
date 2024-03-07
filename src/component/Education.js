import React, { useState } from "react";

import './Education.css';

import CourseCard from "./CourseCard";

const Education = () =>{
    
    const [userValue,setuserValue] = useState(
        {
            subject : "",
            hours : ""
        }
    );

    const clickHandler = (e) =>{
            const name = e.target.name;
            const value = e.target.value;
            console.log(name,value);
            setuserValue({...userValue, [name] : value});
    }

    const [record,setrecord] = useState([]);
    
    const jsonString = JSON.stringify(record);
    
    localStorage.setItem("mapdata",jsonString);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const newRecord = {...userValue} 
        // console.log(records);
        setrecord([...record, newRecord]);
        // console.log(records);   

        setuserValue({ subject:"", hours: ""});
    }

    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Geekster Education Planner</h1>
                <div className="main">
                    <label htmlFor="subject">Subject :</label>
                    <input autoComplete="off" id="subject" name="subject" type="text" className="sub_name_text" value={userValue.subject} onChange={clickHandler}/>
                    <label htmlFor="hours">Hours :</label>
                    <input autoComplete="off" id="hours" name="hours" type="number" className="sub_price_number" value={userValue.hours} onChange={clickHandler}/>
                    <button type="submit" className="btn">Add</button>
                </div>
            </form>
            <div>
                {
                    record.map((course, index)=>{
                     return <CourseCard name={course.subject} hour={course.hours} key={index}/>
                    })
                }
            </div>
        </>
    );
}

export default Education;
import React from "react";
import '../css/header.css';

const Headerarea = () =>{

    const navClick =()=>{
        
    };

    return(
        <div className="headNav">
            <h1>
                
                <a href="/" onClick={navClick}>WEB TEST03</a>
            
            </h1>
            <div className="linkNav">
                <ul>
                    <li><a href="/" onClick={navClick}>HOME</a></li>
                   {/* <li><a href="/" onClick={navClick}>ISBNコード</a></li>
                    <li><a href="/" onClick={navClick}>タイトル</a></li>
                    <li><a href="/" onClick={navClick}>著者</a></li>
    */}
                </ul>
            </div>
        </div>
   
    );

};

export default Headerarea;
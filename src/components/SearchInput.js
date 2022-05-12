import React from "react";
import { useState } from 'react';
import '../css/bookSearch.css';


const SearchInput = () =>{

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = () => {
        
        console.log("ボタン押した");
        console.log(name);
    };

    return(
        <div className="topmain">
            <div>
                <p>BOOK SEARCH</p>
                <br/>
                <input type="text" name="name" value={name} onChange={handleChange} size="50"  placeholder="キーワード検索"/>
                <button onClick={handleSubmit}>検索</button>
            </div>
        </div>
    );

};

export default SearchInput;
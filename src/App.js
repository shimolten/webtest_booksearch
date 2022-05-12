import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
//import SearchInput from  "./components/SearchInput";
import Headerarea from "./components/Headerarea";
import Result from "./components/Searchresults";
import "./css/bookSearch.css";

const App =()=>{
  const [name, setName] = useState("");
  const [bookdata, setBookData] = useState([])
  const [searchFlg, setFlg ] = useState(false);


  const handleChange = (event) => {
      setName(event.target.value);
  }

  const handleSubmit = () => {
    setFlg(true);
      console.log("ボタン押した");
      console.log(name);

  };

  useEffect(() => {

    if (!searchFlg) {
      return;
    }

    axios.get('https://www.googleapis.com/books/v1/volumes?q='+name+'&maxResults=12')
      .then(response => {
          console.log(response.data.items)
          setBookData(response.data.items)
      })
      .catch(error => console.log(error))
      setFlg(false);

  }, [searchFlg])

  return(
  <div>
    <Headerarea/>
    <div className="topmain">
            <div>
                <p>BOOK SEARCH</p>
                <br/>
                <input type="text" name="name" value={name} onChange={handleChange} size="80"  placeholder="キーワード検索"/>
                <button onClick={handleSubmit}>検索</button>
            </div>
        </div>
    <Result book={bookdata}/>
  </div>
  );
};

export default App;

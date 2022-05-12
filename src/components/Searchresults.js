import React from "react";
//import axios from 'axios'
//import { useState } from 'react';
//import { useEffect } from 'react';
import '../css/bookSearch.css';
import Noimage from '../image/noImage.png';

const Result = ({book}) =>{
    
   //const [posts, setPosts] = useState([]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    /*useEffect(()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q=java&maxResults=1')
        .then(res =>setPosts(res.data))
        .catch(error => console.log(error))
    },[])


const [result, setResult] = useState([])
useEffect(() => {
  axios.get('https://www.googleapis.com/books/v1/volumes?q=java&maxResults=12')
    .then(response => {
        console.log(response.data.items)
        setResult(response.data.items)
    })
            
    .catch(error => console.log(error))
}, [])
*/

    return(
        <>
         <div className="wrap">  
            {
                book.map((books,i) => {
                    let thamnails = "";
                    if(books.volumeInfo.imageLinks === undefined){
                        thamnails = Noimage;
                    }else{
                        thamnails =  books.volumeInfo.imageLinks.thumbnail;
                    }
                    return(
                        <div className="item">
                        <a href={books.volumeInfo.previewLink}>
                        <img src={thamnails}/>
                        </a>
                        <h3>{books.volumeInfo.title}</h3>
                        <p>{books.volumeInfo.authors}</p> 
                        </div>
                    )
                })
             }  
         </div>
         </>


    );
};

export default Result;


import React, { useState, useEffect } from "react";
import './ItemList.css';
import Item from './Item';
import {useParams} from 'react-router-dom'
const ItemList = () => {
    const [users, setUsers] = useState([]);
    const {categoryId}= useParams()
   
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${categoryId}`)
        .then((response) => response.json())
        .then((data) => setUsers(data.filter(e=>e.category === categoryId)));
        
    }, [categoryId]);
  
    return (
      <div className="card">
         <h1>{categoryId}</h1>
         {users.map((item) => {
          return (
            <Item key={item.id} user={item}></Item>
            
          );
        })}
      </div>
    );
  };


export default ItemList;
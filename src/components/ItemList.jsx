import React, { useState, useEffect } from "react";
import './ItemList.css';
import Item from './Item';

const ItemList = () => {
    const [users, setUsers] = useState([]);
    
   
    useEffect(() => {
      fetch("https://picsum.photos/v2/list")
        .then((response) => response.json())
        .then((data) => setUsers(data));
        
    }, []);
  
    return (
      <div className="card">
         <h1>Nuestro Staff</h1>
         {users.map((user) => {
          return (
            <Item key={user.id} user={user}></Item>
          
          );
        })}
      </div>
    );
  };


export default ItemList;
import React, { useState, useEffect } from "react";
import { Card, Image } from 'semantic-ui-react';
import './ItemList.css';

const ItemList = () => {
    const [users, setUsers] = useState([]);
    console.log("Users", users);
   
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
            
          <Card  key={user.id}>
            <Image src= {user.download_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{user.author} </ Card.Header>
              
            </Card.Content>
          </Card>
          );
        })}
      </div>
    );
  };


export default ItemList;
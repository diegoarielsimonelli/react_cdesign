import React, { useEffect, useState } from 'react';
import Item from './Item';
import './ItemList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//Spinner
import Loading from './Spinner';
//React-Router-DOM
import { Link, useParams } from "react-router-dom";
const ItemList = () => {
    const { categoryId } = useParams()
    const [products, SetProducts] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios("https://fakestoreapi.com/products/").then((res) => {
            categoryId
                ? SetProducts(res.data.filter((e) => e.category === categoryId))
                : SetProducts(res.data);
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [categoryId]);

    return (
        <>
            {IsLoading === false ? (
                <div className='divCardContainer'>
                    {products.map((e) => {
                        return (
                            <div key={e.id}>
                                <Link to={`/Item/${e.id}`}>
                                    <Item array={e} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            ) :
                <Loading />}
        </>
    );
};

export default ItemList;

// import React, { useState, useEffect } from "react";
// import './ItemList.css';
// import Item from './Item';
// import {useParams} from 'react-router-dom'

// const ItemList = () => {
//     const [users, setUsers] = useState([]);
//     const {categoryId}= useParams()
//     console.log(categoryId)
//     useEffect(() => {
//       fetch(`https://fakestoreapi.com/products/`)
//         .then((response) => response.json())
//         .then((data) => {
//           categoryId ? setUsers(data.filter(e=>e.category === categoryId)):setUsers(data)
//     }, [categoryId])})
    
//     return (
//     <div className="card">
//         <h1>{categoryId}</h1>
//       {users.map((item) => {
//     return (
//          <Item key={item.id} item={item}></Item>
          
//     ); 
//     })}
//  </div>);
     
// };
//  export default ItemList;
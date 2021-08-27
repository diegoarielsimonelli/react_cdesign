import axios from "axios";
import React, { useEffect, useState } from "react";

//compoenentes
import ItemDetail from './ItemDetail'
import Loading from "./Spinner";
import {  useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    // let id = match.params.id;
    const { ItemId} = useParams()
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    

    useEffect(() => {
        axios("https://fakestoreapi.com/products/").then((res) => {
            ItemId
                ? setData(res.data.filter((e) => e.id === ItemId))
                : setData(res.data);
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [ItemId]);

    return (
        <>
            {
                isLoading ? <Loading /> : <ItemDetail item={data} />
            }

        </>
    );
};

export default ItemDetailContainer;




// import React, { useState, useEffect } from "react";
// import ItemDetail from './ItemDetail';
// import Spinner from './Spinner';
// import {useParams} from 'react-router-dom'

// const ItemDetailContainer = () => {
//     const [productos, setProductos] = useState([]);
//     const [ IsLoading, setIsLoading]=useState(true);
//     const {itemId}= useParams()
//     useEffect(() => {
//       fetch(`https://fakestoreapi.com/products/${itemId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           itemId ? setProductos(data.filter(e=>e.item === itemId)):setProductos(data)
//           setProductos(data)
//         setTimeout(()=>{
//           setIsLoading(false);
//             },2000);
//     }, [itemId]);
    

//     return (
//       <> {IsLoading === false ? (
//           <div >
//               {productos.map((productos) => {
//                   return <ItemDetail key={productos.id}  p={productos} />
//               })}
//       </div>
//       ) : <Spinner />}
//       </>
//       )});
// };
          

  
  


// export default ItemDetailContainer


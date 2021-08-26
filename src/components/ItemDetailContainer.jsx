import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import {useParams} from 'react-router-dom'
const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    const [ IsLoading, setIsLoading]=useState(true);
    const {itemId}= useParams()
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then((response) => response.json())
        .then((data) => setProductos(data));
        setTimeout(()=>{
          setIsLoading(false);
            },2000);
    }, [itemId]);
    

    return (
      <> {IsLoading === false ? (
          <div >
              {productos.map((productos) => {
                  return <ItemDetail key={productos.id}  p={productos} />
              })}
      </div>
      ) : <Spinner />}
      </>
  );
};
          

  
  


export default ItemDetailContainer


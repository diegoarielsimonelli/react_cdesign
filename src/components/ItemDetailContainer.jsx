import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    const [ IsLoading, setIsLoading]=useState(true);
   
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProductos(data));
        setTimeout(()=>{
          setIsLoading(false);
            },6000);
    }, []);
    

    return (
      <> {IsLoading === false ? (
          <div >
              {productos.map((productos) => {
                  return <ItemDetail  productos={{productos}} />
              })}
      </div>
      ) : <Spinner />}
      </>
  );
};
          

  
  


export default ItemDetailContainer


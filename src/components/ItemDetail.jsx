import React, { useState, useContext } from "react";
import { Card, Image } from 'semantic-ui-react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from "./CartContext/CartContext";
const ItemDetail = ({item}) => {
  const [product, setProduct] = useState(0);
  const { addItemCart } = useContext(CartContext);
    const onAdd = (p) => {
        setProduct(p);
        addItemCart(item, p);
    };
 
 return<>

     <Card  >
      <Image src= {item.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{item.title} </ Card.Header>
        < Card.Meta>
            <span >  {item.price}</span>
          </Card.Meta>
          <Card.Description>
          {item.description}
          </Card.Description>
      </Card.Content>
        <ItemCount stock="5"initial="0" onAdd={onAdd}  />
         {product > 0 && (
                        <Link to="/Cart">
                            <Button variant="dark" className="mx-2">
                                Terminar Compra
                            </Button>
                        </Link>
                          )};

    </Card>  

    
  </>
  

     

  
  
  
};
      
    

export default ItemDetail

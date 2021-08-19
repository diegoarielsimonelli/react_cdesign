import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const ItemDetail = ({productos}) => (
  <Card  key={productos.id}>
    <Image src= {productos.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{productos.title} </ Card.Header>
      < Card.Meta>
          <span > USD {productos.price}</span> 
        </Card.Meta>
        <Card.Description>
        {productos.description}
        </Card.Description>
    </Card.Content>
  </Card> 

          
);
      
    

export default ItemDetail

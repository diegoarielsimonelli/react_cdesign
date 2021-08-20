import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ItemDetail = ({p}) => {

      <div>

    <Card  key={p.id}>
      <Image src= {p.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{p.title} </ Card.Header>
        < Card.Meta>|
            <strong><span > USD {p.price}</span></strong> 
          </Card.Meta>
          <Card.Description>
          {p.description}
          </Card.Description>
      </Card.Content>
    </Card> 
      </div>

  
  
  
};
      
    

export default ItemDetail

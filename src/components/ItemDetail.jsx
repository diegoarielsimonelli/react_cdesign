import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ItemDetail = ({p}) => {
 
 return<>

    <Card  >
      <Image src= {p.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{p.title} </ Card.Header>
        < Card.Meta>
            <span >  {p.price}</span>
          </Card.Meta>
          <Card.Description>
          {p.description}
          </Card.Description>
      </Card.Content>
    </Card> 
  </>
  

     

  
  
  
};
      
    

export default ItemDetail

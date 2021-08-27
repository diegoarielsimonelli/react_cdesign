import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ItemDetail = ({item}) => {
 
 return<>
{/* <h4>{item.title}</h4> */}
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
    </Card>  
  </>
  

     

  
  
  
};
      
    

export default ItemDetail

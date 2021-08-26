import React from 'react'
import { Card } from 'semantic-ui-react';


const Item = ({item}) => {
 
    return <>
        
             <Card  >
            {/* <Image src= {item.image} wrapped ui={false} /> */}
             <Card.Content>
               <Card.Header>{item.title} </ Card.Header>
               <Card.Description>
               {item.description} 
               </Card.Description>
            </Card.Content>
          </Card> 
        
        </>
}

export default Item

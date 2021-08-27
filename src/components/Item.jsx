import React from 'react'
import { Card, Image } from 'semantic-ui-react';


const Item = ({array}) => {
 
    return <>
       {/* <h1>{array.title} </h1> */}
              <Card  >
             <Image src= {array.image} wrapped ui={false} /> 
             <Card.Content>
               <Card.Header>{array.title} </ Card.Header>
               <Card.Description>
               {array.description} 
               </Card.Description>
            </Card.Content>
          </Card>  
         
        </>
}

export default Item

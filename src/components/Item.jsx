import React from 'react'
import { Card, Image } from 'semantic-ui-react';


const Item = ({user}) => {
    return <>
        
            <Card  >
            <Image src= {user.download_url} wrapped ui={false} />
             <Card.Content>
               <Card.Header>{user.author} </ Card.Header>
              
            </Card.Content>
          </Card>
      
        </>
}

export default Item

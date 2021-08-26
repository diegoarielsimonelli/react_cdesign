import React from 'react'
import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

const Item = ({item}) => {
    return <>
        <Link to={`/item/${item.id}`}>
            <Card  >
            <Image src= {item.image} wrapped ui={false} />
             <Card.Content>
               <Card.Header>{item.title} </ Card.Header>
               <Card.Description>
               {item.description} 
      </Card.Description>
            </Card.Content>
          </Card>
          </Link>
        </>
}

export default Item

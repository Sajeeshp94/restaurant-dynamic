
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Restaurant({restaurant}) {
    // console.log(props.restaurant);
  return (
    <Card>
      <Card.Img variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        
          <h5>
            {restaurant.neighborhood}
          </h5>
          <h5>
            {restaurant.address}
          </h5>
      
        <Button variant="primary" as={Link} to= {`/restaurant/ ${restaurant.id}`}> More info </Button>
      </Card.Body>
    </Card>
  )
}

export default Restaurant
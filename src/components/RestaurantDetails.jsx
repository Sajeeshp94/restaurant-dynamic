import React, { useState } from 'react'
import { useEffect } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams} from 'react-router-dom'

function RestaurantDetails() {
  const {id} = useParams();
  // console.log(id);

    const restaurantsData = useSelector((state)=>state.restaurants.data);

    const restaurant = restaurantsData.find((item)=> item.id == id)
    // console.log(restaurant);

  return (
    <Container>
      <Row>
        <Col md={6}>
        { restaurant && (
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
          </Card.Body>
        </Card>
        )}
        </Col>
        <Col md={6}>
        { restaurant && (
          <Card style={{ }}>
          <ListGroup variant="flush">
            <h4>operating_hours</h4>
            <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday: {restaurant.operating_hours.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday: {restaurant.operating_hours.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday: {restaurant.operating_hours.Sunday}</ListGroup.Item>
            <h4>Reviews</h4>
            <ListGroup.Item>Name: {restaurant.reviews[0].name}</ListGroup.Item>
            <ListGroup.Item>Date: {restaurant.reviews[0].date}</ListGroup.Item>
            <ListGroup.Item>Rating: {restaurant.reviews[0].rating}</ListGroup.Item>
            <ListGroup.Item>Comments: {restaurant.reviews[0].comments}</ListGroup.Item>
            <ListGroup.Item>Name: {restaurant.reviews[1].name}</ListGroup.Item>
            <ListGroup.Item>Date: {restaurant.reviews[1].date}</ListGroup.Item>
            <ListGroup.Item>Rating: {restaurant.reviews[1].rating}</ListGroup.Item>
            <ListGroup.Item>Comments: {restaurant.reviews[1].comments}</ListGroup.Item>
            </ListGroup>
        </Card>
        )}
        </Col>

      {/* <Col md={12}>
        { restaurant && (
          <Card style={{ }}>
          <ListGroup variant="flush">
            
          </ListGroup>
        </Card>
        )}
        </Col> */}
        </Row>
    </Container>
  )
}

export default RestaurantDetails
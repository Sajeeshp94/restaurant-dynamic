
import React, { useEffect } from 'react'
import Restaurant from './Restaurant';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from './reducers/restaurantSlice';


function Home() {
  
    const dispatch = useDispatch();
    const restaurantsData = useSelector((state)=>state.restaurants.data);
    console.log(restaurantsData);

  
    useEffect(() => {
      
      const fetchRestaurants = async()=>{
        let result=await fetch('./restaurants.json')
        .then((res)=>res.json());
        // console.log(result.restaurants);
        dispatch(getRestaurants(result.restaurants))

    }
    fetchRestaurants();
      
    }, [])
    
    //  console.log(restaurants);

  return (
    <Container>
      <Row>
        {restaurantsData && restaurantsData.map((restaurant,index)=>(
          <Col md={3} className='my-3' key={index}>
            <Restaurant restaurant = {restaurant} />
          </Col>
        ))}
       
      </Row>
    </Container>
  )
}

export default Home
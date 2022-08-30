import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Card from './Card'

import image from "../images/event.png"

function Events() {

  const items = [
        <Card 
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
        />,

        <Card 
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
        />,

        <Card 
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
        />,

        <Card 
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
        />,

        <Card 
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
        />,

        <Card 
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
        />
  ]

  const handleDragStart = (e) => e.preventDefault()

  return (
    <Container>
        <h1>Upcoming Events</h1>

        <AliceCarousel mouseTracking touchTracking keyboardNavigation autoPlay autoPlayInterval={800} disableButtonsControls paddingRight={10} autoWidth items={items} />

        <button className='view'>View all</button>
    </Container>
  )
}

export default Events

const Container = styled.div`
    margin: 20px;
    margin-top: 40px;
    text-align: left;

    h1{
        font-size: 25px;
    }

    .view{
        margin-top: 30px;
        background: #FFC70A;
        width: 100%;
        height: 43px;
        border-radius: 20px;
        color: white;
    }
`

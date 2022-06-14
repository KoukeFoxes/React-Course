import React from 'react'

import Navbar from './componments/Navbar'
import Hero from './componments/Hero'
import Card from './componments/Card'

import Data from './data'

export default function App() {

    const cards = Data.map(card =>
        <Card
            key={card.id}
            // img={card.coverImg}
            // rating={card.stats.rating}
            // reviewCount={card.stats.reviewCount}
            // location={card.location}
            // title={card.title}
            // price={card.price}
            // openSpots={card.openSpots}
            
            {...card}
            
            />)

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="containerCard">
                {cards}
            </div>
        </div>
    )
}
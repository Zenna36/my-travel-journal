import React from 'react'
import data from '../data'
import Card from './Card'


const Main =()=>{
    const cards = data.map(card => {
        return <Card 
            key = {card.id}
            // imageUrl={card.imageUrl}
            // location={card.location}
            // googleMaps={card.googleMapsUrl}
            // startDate={card.startDate}
            // endDate={card.endDate}
            // description={card.description}
            {...card}
        />
    })
    
    console.log({cards})
    return(
        <main className='main'>
            <div className='container'>
                <div className='row'>
                    {cards}
                </div>
            </div>
        </main>
    )
}

export default Main
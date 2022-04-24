import React from 'react'

const Card =(props)=>{
    return(
        <section className='theCards'>
            {/* image */}
            <figure className='figure card-image'>
                <div className='badgeText'>{props.title}</div>
                <img src={props.imageUrl} alt='image' className='img-fluid cardImage' />
            </figure>

            {/* caption*/}
            <div className='cardDesc'>
                <span className='location'><svg class="icon icon-location2"><use xlinkHref="#icon-location2"></use></svg>{props.location}</span>
                <a href={props.googleMapsUrl} target="_blank" className='link googleMaps'> See for yourself! </a>
            </div>

            {/* about */}
            <div className='travelDates'>
                <div className='dates'>{props.startDate} - {props.endDate}</div>
            </div>

            {/* description */}
            <div className='locationDesc'>
                <div className='description'>{props.description}</div>
            </div>
            <hr />
        </section>
    )
}

export default Card
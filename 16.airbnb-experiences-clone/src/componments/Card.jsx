import React from 'react'


// import starImg from '../images/star.png'

export default function Card(props) {
    return (
        <div className='card'>
            <div className="card--badge">{props.openSpots === 0 ? 'SOLD OUT' : "ONLINE"}</div>
            <img src={`/images/${props.coverImg}`} alt='airbnb logo' className='card--image' />
            <div className='card--stats'>
                <img className='card--star' src="/images/star.png" alt='star' />
                <span>{props.stats.rating}</span>
                <span className="gray" >({props.stats.reviewCount}) • </span>
                <span className="gray" >{props.location}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}
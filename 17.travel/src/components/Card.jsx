import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
                <img className='card--img' src={`/images/${props.img}`} alt={props.title} />
                <div className='card--info'>
                <div className='card--location-div'>
                    <i className="fas fa-map-marker-alt card--icon"></i>
                    <span className="card--location">{props.location}</span>
                    <span className="card--google">View on Google</span>
                </div>
                <span className="card--title">{props.title}</span>
                <span className="card--date">{props.date}</span>
                <span className="card--description">{props.description}</span>
                </div>
        </div>
        )
}
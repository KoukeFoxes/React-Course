import React from 'react'
import Card from './Card'
import Data from '../data'

export default function Navbar() {
    let re = Data.map(item => {
        return <Card {...item} />
        })
    return (
        <div className='list'>{re}</div>
        )
}
import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Interests from './components/Interests'
import Info from './components/Info'

export default function App(){
    return (
        <div className="App">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
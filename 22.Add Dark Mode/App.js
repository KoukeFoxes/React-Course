import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    
    const [isDarkMode, setDarkMode] = React.useState(true)

    
    return (
        <div className="container">
            <Navbar darkMode={isDarkMode} toggleDarkMode={()=>setDarkMode(!isDarkMode)} />
            <Main darkMode={isDarkMode} />
        </div>
    )
}
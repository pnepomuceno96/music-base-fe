import React, { useState } from 'react'

const Home = () => {
    // Temporary code for simple end to end api call
    //const [showApiMessage, setShowApiMessage] = useState(false)
    const [apiMessage, setApiMessage] = useState('')
    const handleGetApi = () => {
        //setApiMessage()
    }

    return (
        <div>Home
            <button>Click me</button>
            {apiMessage && <p>{apiMessage}</p>}
            <p>la dee daa</p>
            <p>music is cool</p>
        </div>
    )
}

export default Home
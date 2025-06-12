import React, { useState } from 'react'
import Background from './back/background'
import Navigation from './navigation/navigation'
import Navbar from '../Nav/Navbar'


function Images() {
    const [imageDisplay,setImageDisplay]=useState(1)
    const [isVisible,setIsVisible]=useState(true)
    return (
        <div>
        <Background imageDisplay={imageDisplay}/>
        <Navigation setImageDisplay={setImageDisplay} imageDisplay={imageDisplay} isVisible={isVisible} setIsVisible={setIsVisible}/>
        {isVisible && <Navbar/>}

        </div>
    )
}

export default Images

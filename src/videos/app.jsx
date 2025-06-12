import React from 'react'
import { useState } from 'react'
import Background from './background/background'
import Navigation from './navigation/navigation'
import Navbar from '../Nav/Navbar'

function Video() {
    const [videoDisplay,setVideoDisplay]= useState(1)
    const [isVisible,setIsVisible]=useState(true)

    return (
        <div>
            <Background videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay}/>
            <Navigation videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay} isVisible={isVisible} setIsVisible={setIsVisible}/>
            {isVisible && <Navbar/>}
        </div>
        
    )
}

export default Video

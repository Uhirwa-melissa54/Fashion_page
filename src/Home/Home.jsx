import React from 'react'
import {useState} from 'react'
import Background from './Content/back/Background'
import Navigation from './Content/navigation/navigation'
import Navbar from '../Nav/Navbar'



function Home() {
    const content=[{text1:"Modelling is",text2:"Just feeling than career"},{text1:"We model as ",text2:"as talent and commitment"}, {text1:"Models are ", text2:" not for the entertainment "}]
    const [playStatus,setPlayStatus]=useState(false)
    const [imageDisplay, setImageDisplay]= useState(2)
    const [isVisible,setIsVisible]=useState(true)
    return (
        <div>
            
         <Background playedStatus={playStatus} imagetobeDisplayed={imageDisplay}/>
         {isVisible&&<Navbar/>}
         <Navigation setImageDisplay={setImageDisplay} playStatus={playStatus} setPlayStatus={setPlayStatus} content={content[imageDisplay]} imageDisplay={imageDisplay} isVisible={isVisible} setIsVisible={setIsVisible}/>
         </div>
    )
}

export default Home

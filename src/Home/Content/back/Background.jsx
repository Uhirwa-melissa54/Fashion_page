import React from 'react'
import video from '../../../assets/video1.mp4'
import image1 from '../../../assets/image1.jpg'
import image2 from '../../../assets/image2.jpg'
import image3 from '../../../assets/image3.jpg'
import mute from '../../../assets/mute.png'
import unmute from '../../../assets/unmute.png'
import {useState,useRef} from 'react'
import './background.css'

function Background({playedStatus, imagetobeDisplayed}) {
    const[isMute, setIsMute]=useState(true)
    const videoRef=useRef(null)
    const muteOrUnmute=()=>{
        if(videoRef.current){
            videoRef.current.muted=!isMute;
            setIsMute(!isMute)
        }

    }
    if(playedStatus){
        return(
            <div>
            <div>
            <video className='back wait'  ref={videoRef} autoPlay loop muted>
                <source src={video}  type='video/mp4'/>
            </video>
            </div>
            <div className='muting'>
                <img onClick={muteOrUnmute} src={isMute?mute:unmute} className='mute-button'/>
                {isMute?<p>Unmute the Video</p>:<p>Mute the video</p>}
            </div>
            </div>
        )
    }
    else if(imagetobeDisplayed===0){
        return(
        <img src={image1} className='back  wait'/>
        )
    }
    else if(imagetobeDisplayed===1){
        return(
        <img src={image2} className='back wait'/>
        )
    }
    else if(imagetobeDisplayed===2){
        return(
        <img src={image3} className='back wait'/>
        )
    }
}


export default Background

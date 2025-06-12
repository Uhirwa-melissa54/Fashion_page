import React from 'react'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import video4 from '../../assets/video4.mp4'
import video5 from '../../assets/video5.mp4'
import video6 from '../../assets/video6.mp4'
import video7 from '../../assets/video7.mp4'
import video8 from '../../assets/video8.mp4'

function Background({videoDisplay,setVideoDisplay}) {
     if(videoDisplay==0){
        return (
            <video key="video1" className='back wait' autoPlay loop muted>
                <source src={video1} />
            </video>
        )
    }
    
     else if(videoDisplay==1){
        return (
            <video key="video2"className='back wait' autoPlay loop muted>
                <source src={video2} />
            </video>
        )
    }
    else if(videoDisplay==2){
        return (
            <video key="video3"className='back wait' autoPlay loop muted>
                <source src={video3} />
            </video>
        )
    }
    else if(videoDisplay==3){
        return (
            <video key="video4" className='back wait' autoPlay loop muted>
                <source src={video4} />
            </video>
        )
    }
    else if(videoDisplay==4){
        return (
            <video key="video5" className='back wait' autoPlay loop muted>
                <source src={video5} />
            </video>
        )
    }
    else if(videoDisplay==5){
        return (
            <video key="video6" className='back wait' autoPlay loop muted>
                <source src={video6} />
            </video>
        )
    }
    else if(videoDisplay==6){
        return (
            <video key="video7" className='back wait' autoPlay loop muted>
                <source src={video7} />
            </video>
        )
    }
    else if(videoDisplay==7){
        return (
            <video key="video8" className='back wait' autoPlay loop muted>
                <source src={video8} />
            </video>
        )
    }
    
}

export default Background

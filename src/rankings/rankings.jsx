import React, { useEffect } from 'react'
import { useState } from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video5.mp4'
import video3 from '../assets/video4.mp4'
import video4 from '../assets/video7.mp4'
import video5 from '../assets/video2.mp4'
import video6 from '../assets/video6.mp4'
import video7 from '../assets/video8.mp4'
import video8 from '../assets/video3.mp4'
import './rankings.css'
import dropdown from '../assets/dropdown.png'
import dropup from '../assets/dropup.png'
import Navbar from '../Nav/Navbar'
import Navigation from './navigation'


function Rankings() {
    const[videoDisplay,setVideoDisplay]=useState(0)
    const[displayText,setDisplayText]=useState(true)
    const [isVisible,setIsVisible]=useState(true)
    
    useEffect(() => {
        const interval = setInterval(() => {
          setVideoDisplay(prev => prev === 7 ? 0 : prev + 1);
        }, 9000);
        
        return () => clearInterval(interval); // Clean up on unmount
      }, []);
        useEffect(()=>{
            setDisplayText(true)
            setTimeout(()=>{
                setDisplayText(false)
    
            },2000)
        },[videoDisplay])
    if(videoDisplay==0){
       if(displayText){
        return ( <div className='whole'><div className='divheadings'><h1>Number One</h1></div></div>)
       }
        else{
            return (
                <div>
                <video  className='back wait'autoPlay loop muted>
                    <source src={video1} />
                </video>
                <div className={isVisible?' visible  ':' visible up'}>
                <img  onClick={()=>{
                    setIsVisible(!isVisible)
                }}  src={isVisible?dropup:dropdown} alt="" />
                </div>
                {isVisible && <Navbar/>}
                <Navigation videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay}/>
                </div>
            )
        }
    }
    else if(videoDisplay==1){
        if(displayText){
         return (
            <div className='whole'><div className='divheadings'>
         <h1>Number Two</h1>
         </div></div>)
        }
         else{
             return (
                <div>
                 <video className='back wait' autoPlay loop muted>
                     <source src={video2} className='back wait'/>
                 </video>
                 <div className={isVisible?' visible  ':' visible up'}>
                <img  onClick={()=>{
                    setIsVisible(!isVisible)
                }}  src={isVisible?dropup:dropdown} alt="" />
                </div>
                {isVisible && <Navbar/>}
                <Navigation videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay}/>
                 </div>
             )
         }
     }
     else if(videoDisplay==2){
        if(displayText){
         return (
            <div className='whole'>
         <div className='divheadings'><h1>Number Three</h1>
         </div> </div>)
        }
         else{
             return (
                <div>
                 <video  className='back wait' autoPlay loop muted>
                     <source src={video3} className='back wait'/>
                 </video>
                 <div className={isVisible?' visible  ':' visible up'}>
                <img  onClick={()=>{
                    setIsVisible(!isVisible)
                }}  src={isVisible?dropup:dropdown} alt="" />
                </div>
                {isVisible && <Navbar/>}
                <Navigation videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay}/>
                 </div>
             )
         }
     }
     if(videoDisplay==3){
        if(displayText){
         return (<div className='whole'><div className='divheadings'><h1>Number Four</h1></div></div>)
        }
         else{
             return (
                <div>
                 <video  className='back wait' autoPlay loop muted>
                     <source src={video4} className='back wait'/>
                 </video>
                 <div className={isVisible?' visible  ':' visible up'}>
                <img  onClick={()=>{
                    setIsVisible(!isVisible)
                }}  src={isVisible?dropup:dropdown} alt="" />
                </div>
                {isVisible && <Navbar/>}
                <Navigation videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay}/>
                 </div>
             )
         }
     }
     if(videoDisplay==4){
        if(displayText){
         return (<div className='whole' ><div className='divheadings'><h1>Number Five</h1></div></div>)
        }
         else{
             return (
                <div>
                 <video className='back wait' autoPlay loop muted>
                     <source src={video5} className='back wait'/>
                 </video>
                 <div className={isVisible?' visible  ':' visible up'}>
                <img  onClick={()=>{
                    setIsVisible(!isVisible)
                }}  src={isVisible?dropup:dropdown} alt="" />
                </div>
                {isVisible && <Navbar/>}
                <Navigation videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay}/>
                 </div>
             )
         }
     }
     if(videoDisplay==5){
        if(displayText){
         return (<div className='whole'><div className='divheadings'><h1>Number Six</h1></div></div>)
        }
         else{
             return (
                <div>
                 <video  className='back wait'autoPlay loop muted>
                     <source src={video6} className='back wait'/>
                 </video>
                 <div className={isVisible?' visible  ':' visible up'}>
                <img  onClick={()=>{
                    setIsVisible(!isVisible)
                }}  src={isVisible?dropup:dropdown} alt="" />
                </div>
                {isVisible && <Navbar/>}
                <Navigation videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay}/>
                 </div>
             )
         }
     }
     if(videoDisplay==6){
        if(displayText){
         return (<div className='whole'><div className='divheadings'><h1>Number Seven</h1></div></div>)
        }
         else{
             return (
                <div>
                 <video  className='back wait' autoPlay loop muted>
                     <source src={video7} className='back wait'/>
                 </video>
                 <div className={isVisible?' visible  ':' visible up'}>
                <img  onClick={()=>{
                    setIsVisible(!isVisible)
                }}  src={isVisible?dropup:dropdown} alt="" />
                </div>
                {isVisible && <Navbar/>}
                <Navigation videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay}/>
                 </div>
             )
         }
     }
     if(videoDisplay==7){
        if(displayText){
         return (<div className='whole'><div className='divheadings'><h1>Number Eight</h1></div></div>)
        }
         else{
             return (
                <div>
                 <video className='back wait' autoPlay loop muted>
                     <source src={video8} className='back wait'/>
                 </video>
                 <div className={isVisible?' visible  ':' visible up'}>
                <img  onClick={()=>{
                    setIsVisible(!isVisible)
                }}  src={isVisible?dropup:dropdown} alt="" />
                </div>
                {isVisible && <Navbar/>}
                <Navigation videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay}/>
                 </div>
             )
         }
     }

}

export default Rankings

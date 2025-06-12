import React from 'react'
import './navigation.css'
import  play from '../../../assets/play.png'
import   pause from '../../../assets/pause.png'
import { useEffect } from 'react'
import dropup from '../../../assets/dropup.png'
import dropdown from '../../../assets/dropdown.png'
import { useState } from 'react'



function Navigation({setImageDisplay,playStatus,setPlayStatus ,content,imageDisplay,isVisible,setIsVisible}) {
    
    useEffect(()=>{
        setInterval(()=>{
            setImageDisplay((prevCount)=>{
                return prevCount==2?prevCount=0:prevCount+=1
            })
        },5000)
    },[])
    return (
        <div className='all'>
            <div className='text'>
                <p className='p1'>{content.text1}</p>
                <p className='p2'>{content.text2}</p>
            </div>
        <div className='lists'>
            <ul>
            <li onClick={()=>{
                setImageDisplay(0)
            }} className={imageDisplay==0?'affected':'notaffected'}>
                
            </li>
            <li onClick={()=>{
                setImageDisplay(1)
            }} className={imageDisplay==1?'affected':'notaffected'}>

            </li>
            <li onClick={()=>{
                setImageDisplay(2)
            }} className={imageDisplay==2?'affected':'notaffected'}>

            </li>
            </ul>
            
            
        </div>
        <div className='imgPlay'>
            <img  onClick={()=>{
                setPlayStatus(!playStatus)
            } } src={playStatus?play:pause}  />
            <p>Play the video</p>
            </div>
           <div className={isVisible?' visible  ':' visible up'}>
           <img  onClick={()=>{
               setIsVisible(!isVisible)
           }}  src={isVisible?dropup:dropdown} alt="" />
                   </div> 
        </div>
    )
}

export default Navigation

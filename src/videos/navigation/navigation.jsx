import React from 'react'
import {useEffect} from 'react'
import dropup from '../../assets/dropup.png'
import dropdown from  '../../assets/dropdown.png'

function Navigation({videoDisplay,setVideoDisplay,isVisible,setIsVisible}) {
    useEffect(()=>{
        const interval= setInterval(()=>{
    setVideoDisplay((count)=>{
        return count==7?count=0:count+=1
    })
        },5000)
        return ()=>clearInterval(interval)
    
    },[videoDisplay])
    return (
        <div>
        <div className='lists'>
             <ul><li onClick={()=>{
                setVideoDisplay(0)
            }} className={videoDisplay==0?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setVideoDisplay(1)
            }} className={videoDisplay==1?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setVideoDisplay(2)
            }} className={videoDisplay==2?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setVideoDisplay(3)
            }} className={videoDisplay==3?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setVideoDisplay(4)
            }} className={videoDisplay==4?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setVideoDisplay(5)
            }} className={videoDisplay==5?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setVideoDisplay(6)
            }} className={videoDisplay==6?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setVideoDisplay(7)
            }} className={videoDisplay==7?'affected':'notaffected'}></li>
            </ul>
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

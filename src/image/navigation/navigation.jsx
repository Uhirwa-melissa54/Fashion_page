import React, { useEffect } from 'react'
import './navigation.css'
import dropup from '../../assets/dropup.png'
import dropdown from '../../assets/dropdown.png'

function Navigation({imageDisplay,setImageDisplay,isVisible, setIsVisible}) {
    
   useEffect(()=>{
    const interval=setInterval(()=>{
        setImageDisplay((count)=>{
            return count==7?0:count+1
        })

    },3000)
    return ()=>clearInterval(interval)

   },[])
       
    
    return (
        <div>
    
        <div  className='lists'>
            <ul><li onClick={()=>{
                setImageDisplay(0)
            }} className={imageDisplay==0?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setImageDisplay(1)
            }} className={imageDisplay==1?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setImageDisplay(2)
            }} className={imageDisplay==2?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setImageDisplay(3)
            }} className={imageDisplay==3?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setImageDisplay(4)
            }} className={imageDisplay==4?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setImageDisplay(5)
            }} className={imageDisplay==5?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setImageDisplay(6)
            }} className={imageDisplay==6?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setImageDisplay(7)
            }} className={imageDisplay==7                                                                   ?'affected':'notaffected'}></li></ul>
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

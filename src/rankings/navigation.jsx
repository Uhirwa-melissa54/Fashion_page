import React from 'react'

function Navigation({videoDisplay,setVideoDisplay}) {
    return (
        <div  className='lists'>
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
    )
}

export default Navigation

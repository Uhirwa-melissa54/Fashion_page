import React from 'react'
import { useEffect} from 'react'
import './navigation.css'

function Navigation({contentDisplay,setContentDisplay,text}) {
    useEffect(()=>{
        const interval=setInterval(()=>{
            setContentDisplay((count)=>{
             return count==7?count=0:count+=1
            })
        },5000)
        return ()=>

clearInterval(interval)
    },[])
    return (
        <div>
            <div className='text1 divv'>
                <p className='p11'>{text.text1}</p>
                <p className='p21'>{text.text2}</p>
                <p className='p21'>{text.text3}</p>
                <p className='p21'>{text.text4}</p>
                <p className='p21'>{text.text5}</p>
                <p className='p21'>{text.text6}</p>
                <p className='p21'>{text.text7}</p>
                <p className='p21'>{text.text8}</p>
                <p className='p21'>{text.text9}</p>
                <p className='p21'>{text.text10}</p>
                <p className='p21'>{text.text11}</p>
                <p className='p21'>{text.text12}</p>
                

                

            </div>
            <div  className='lists'>
            <ul><li onClick={()=>{
                setContentDisplay(0)
            }} className={contentDisplay==0?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setContentDisplay(1)
            }} className={contentDisplay==1?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setContentDisplay(2)
            }} className={contentDisplay==2?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setContentDisplay(3)
            }} className={contentDisplay==3?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setContentDisplay(4)
            }} className={contentDisplay==4?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setContentDisplay(5)
            }} className={contentDisplay==5?'affected':'notaffected'}></li>
            <li onClick={()=>{
                setContentDisplay(6)
            }} className={contentDisplay==6?'affected':'notaffected'}></li></ul>
        </div>
        </div>
    )
}

export default Navigation

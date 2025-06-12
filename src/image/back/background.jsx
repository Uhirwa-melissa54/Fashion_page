import React from 'react'
import image1 from '../../assets/image8.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'
import image7 from '../../assets/image9.jpg'
import image8 from '../../assets/image111.jpg'

function Background({imageDisplay}) {
   if(imageDisplay==0){
    return (<img src={image1} className='back'/>)
   }
   else if(imageDisplay==1){
    return (<img src={image2} className='back'/>)
   }
   else if(imageDisplay==2){
      return (<img src={image3} className='back'/>)
     }
     else if(imageDisplay==3){
      return (<img src={image4} className='back'/>)
     }
     else if(imageDisplay==4){
      return (<img src={image5} className='back'/>)
     }
     else if(imageDisplay==5){
      return (<img src={image6} className='back'/>)
     }
     else if(imageDisplay==6){
      return (<img src={image7} className='back'/>)
     }
     else if(imageDisplay==7){
      return (<img src={image8} className='back'/>)
     }
}

export default Background

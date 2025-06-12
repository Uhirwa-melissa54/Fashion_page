import React from 'react'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'
import image7 from '../../assets/image9.jpg'
import image8 from '../../assets/image8.jpg'

function Backg({contentDisplay,setContentDisplay}) {
    
if(contentDisplay==0){
    return (<img src={image1} className='back'/>)
   }
   else if(contentDisplay==1){
    return (<img src={image2} className='back'/>)
   }
   else if(contentDisplay==2){
      return (<img src={image3} className='back'/>)
     }
     else if(contentDisplay==3){
      return (<img src={image4} className='back'/>)
     }
     else if(contentDisplay==4){
      return (<img src={image5} className='back'/>)
     }
     else if(contentDisplay==5){
      return (<img src={image6} className='back'/>)
     }
     else if(contentDisplay==6){
      return (<img src={image7} className='back'/>)
     }
     else if(contentDisplay==7){
      return (<img src={image8} className='back'/>)
     }
}

export default Backg

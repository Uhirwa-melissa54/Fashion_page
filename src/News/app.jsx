import React from 'react'
import './app.css'

import { useState } from 'react'
import Backg from './background/backg'
import Navigation from './navigation/navigation'
import Navbar from '../Nav/Navbar'


function News() {
    const [contentDisplay,setContentDisplay]=useState(0)
    const [isVisible,setIsVisible]=useState(true)
    const content=[{text1:"Runway Ready",text2:"This dress commands the spotlight with every stitch.", text3:"This dress captivates with every fold and curve.",text4:"Its silhouette speaks of boldness and grace cons", text5:"With each movement, it becomes more enchanting.",text6:"Crafted with precision, it embraces the body effortlessly",text7:"The fabric whispers luxury as it flows with every step",text8:"A design that embodies sophistication and allure", text9:"A design that embodies sophistication and allure",text10:"No embellishment is excessive; every element has purpose.",text11:"Bold yet understated, it leaves a lasting impression.",text12:"Bold yet understated, it leaves a lasting impression."},
      {text1:"Shades of Style",text2:"The colors shift with the light, creating a visual dance.", text3:"Each detail is a reflection of the designer's artistry",text4:"From its neckline to the hem, it defines elegance", text5:"This dress commands attention, yet remains refined.",text6:"It moves like a second skin, accentuating every motion",text7:"The fabric ripples as you walk, inviting admiration",text8:"A perfect balance of structure and fluidity in one.",text9:"A design that embodies sophistication and allure",text10:"No embellishment is excessive; every element has purpose.",text11:"Bold yet understated, it leaves a lasting impression.",text12:"Bold yet understated, it leaves a lasting impression."},
      {text1:"Minimal Mood",text2:"Every angle offers a new perspective, a new beauty.", text3:"The stitching, flawless, tells a story of craftsmanship.",text4:"It holds a timeless appeal, never bound by trends.", text5:"The design celebrates the body, enhancing natural beauty.",text6:"No embellishment is excessive; every element has purpose.",text7:"This dress is both an art piece and a statement.",text8:"With each movement, it becomes more enchanting.",text9:"A design that embodies sophistication and allure",text10:"No embellishment is excessive; every element has purpose.",text11:"Bold yet understated, it leaves a lasting impression.",text12:"Bold yet understated, it leaves a lasting impression."},
      {text1:"Fashion Story",text2:"The fit is perfect, as though it was made just for you.", text3:"Its design is an homage to both tradition and modernity.",text4:"The details shine in their subtlety, never overstated.", text5:"Its simplicity is its power, quietly demanding respect.",text6:"The fabric drapes beautifully, never clinging too tight",text7:"A dress made to be worn, not just seen.",text8:"A statement of effortless beauty and strength.",text9:"A design that embodies sophistication and allure",text10:"No embellishment is excessive; every element has purpose.",text11:"Bold yet understated, it leaves a lasting impression.",text12:"Bold yet understated, it leaves a lasting impression."},
      {text1:"Models Allure",text2:"e fabric ripples as you walk, inviting admiration.", text3:"The stitching, flawless, tells a story of craftsmanship.",text4:"The fabric's texture is a tactile pleasure, smooth and rich.", text5:"Its design is an homage to both tradition and modernity.",text6:"Bold yet understated, it leaves a lasting impression.",text7:"Bold yet understated, it leaves a lasting impression.",text8:"The hem sways like the rhythm of a heartbeat.",text9:"A design that embodies sophistication and allure",text10:"No embellishment is excessive; every element has purpose.",text11:"Bold yet understated, it leaves a lasting impression.",text12:"Bold yet understated, it leaves a lasting impression."},
      {text1:"Fashion Modernity",text2:"Its simplicity is its power, quietly demanding respect.", text3:"Every turn reveals a new layer of elegance",text4:"The hem sways like the rhythm of a heartbeat", text5:"The fabric's texture is a tactile pleasure, smooth and rich",text6:"Bold yet understated, it leaves a lasting impression.",text7:"This dress commands attention, yet remains refined.",text8:"Each detail is a reflection of the designer's artistry.",text9:"A design that embodies sophistication and allure",text10:"No embellishment is excessive; every element has purpose.",text11:"Bold yet understated, it leaves a lasting impression.",text12:"Bold yet understated, it leaves a lasting impression."},
      {text1:"Leading Allure",text2:"Every angle offers a new perspective, a new beauty.", text3:"The stitching, flawless, tells a story of craftsmanship.",text4:"It holds a timeless appeal, never bound by trends.", text5:"The design celebrates the body, enhancing natural beauty.",text6:"No embellishment is excessive; every element has purpose.",text7:"This dress is both an art piece and a statement.",text8:"With each movement, it becomes more enchanting.",text9:"A design that embodies sophistication and allure",text10:"No embellishment is excessive; every element has purpose.",text11:"Bold yet understated, it leaves a lasting impression.",text12:"Bold yet understated, it leaves a lasting impression."},
      {text1:"Captivating Models",text2:"Its simplicity is its power, quietly demanding respect.", text3:"Every turn reveals a new layer of elegance",text4:"The hem sways like the rhythm of a heartbeat", text5:"The fabric's texture is a tactile pleasure, smooth and rich",text6:"Bold yet understated, it leaves a lasting impression.",text7:"Each detail is a reflection of the designer's artistry.",text8:"Bold yet understated, it leaves a lasting impression.",text9:"A design that embodies sophistication and allure",text10:"No embellishment is excessive; every element has purpose.",text11:"Bold yet understated, it leaves a lasting impression.",text12:"Bold yet understated, it leaves a lasting impression."}
    ]

 
  return(
    <div>
    <Backg contentDisplay={contentDisplay} setContentDisplay={setContentDisplay}/>
    <Navigation contentDisplay={contentDisplay} setContentDisplay={setContentDisplay} text={content[contentDisplay]}/>
    <Navbar/>
    
    </div>
  )      
        
    
}

export default News

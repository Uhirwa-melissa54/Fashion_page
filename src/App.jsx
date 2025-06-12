import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Nav/Navbar'
import Home from './Home/Home'
import Images from './image/app'
import Video from './videos/app'
import Rankings from './rankings/rankings'
import News from './News/app'


function App() {
  return (
    <div>

      <div>
<BrowserRouter>
<Routes>
  
  <Route  path="/"element={<Home/>}></Route>
  <Route path="/images"  element={<Images/>}></Route>
  <Route path="/videos"  element={<Video/>}></Route>
  <Route path="/ranking" element={<Rankings/>}></Route>
  
  <Route path="/news"   element={<News/>}></Route>
    
  
</Routes>
</BrowserRouter>
      </div>
    </div>
    
  )
}

export default App


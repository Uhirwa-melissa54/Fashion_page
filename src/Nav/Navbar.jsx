import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './Navbar.css'

        
    


function Navbar() {
    return (
        <div className="bigone">
            <div>
                <h1>WeModels</h1>
            </div>
      <div >
        <nav>
        <ul className='navbar'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/news">News</Link>
            </li>
            <li>
                <Link to="/images">Images</Link>
            </li>
            <li>
                <Link to="/videos">Videos</Link>
            </li>
            <li>
                <Link to="/ranking">Ranks</Link>
            </li>
            
        </ul>
        </nav>
        

       
      </div>  
      </div>
    )
}

export default Navbar


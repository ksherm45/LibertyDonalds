import React from 'react'
import {Link} from 'react-router-dom'
require('../App.css')

function Navbar() {
  return (
    <div className='Navbar'>
    <Link className='Link' to="/">Home</Link>    
    <Link  className='Link' to="/Audio">Audio</Link>
    <Link className='Link' to="/Video">Video</Link> 
    <Link className='Link' to="/Pods">Pods</Link>    
    <Link className='Link' to="/Library">Library</Link>    



    
    
    </div>
  )
}

export default Navbar
import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import {Navbar, Nav} from 'react-bootstrap';
require('../App.css')


function MyNav(props) {

const {user, Logout} = props
const image = require("../components/liberty-donaldsMesa-de-trabajo-11.png")
const pic = require("../components/base-portada-video-2 copy.jpg")
  return (

    <Navbar className='Navbar'  bg="dark"  expand="lg">
		
    <div >
     <Link to="/">
     <img className="logo" src={image} height={200} width={200} alt="logo" />  
     </Link>
     </div> 

    <Nav>
    <Link className='Link' to="/">HOME</Link>    
    <Link  className='Link' to="/Audio">AUDIO</Link>
    <Link className='Link' to="/Video">VIDEO</Link> 
    <Link className='Link' to="/Pods">PODS</Link>    
     </Nav>

     <div className='logo' >
     <Link to="/">
     <img className="logo" src={pic} height={82} width={200} alt="logo" />  
     </Link>
     </div> 
     
    
    
    {/* { !user ? (
				<div>
						<Link  className='Link' to="/signin">SignIn</Link>
						<Link className='Link'  to="/signup">SignUp</Link>
					</div> ) : (

						<Button  variant="contained" color="secondary" onClick={Logout}>Logout</Button> )
} */}

  </Navbar>					
  )
}

export default MyNav
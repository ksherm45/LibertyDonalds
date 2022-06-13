import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import {Navbar, Nav} from 'react-bootstrap';
require('../App.css')


function MyNav(props) {

const {user, Logout} = props
const image = require("../components/liberty-donaldsMesa-de-trabajo-11.png")

  return (

    <Navbar className='Navbar'  bg="dark"  expand="lg">
		
    <Nav>
    <Link className='Link' to="/">HOME</Link>    
    <Link  className='Link' to="/Audio">AUDIO</Link>
    <Link className='Link' to="/Video">VIDEO</Link> 
    <Link className='Link' to="/Pods">PODS</Link>    
    <Link className='Link' to="/Library">LIBRARY</Link> 
     </Nav>

     <div className='logo'>
     
    <img src={image} height={200} width={200}  alt="logo" />  
    
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
import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import {Navbar, Nav} from 'react-bootstrap';
require('../App.css')


function MyNav(props) {

const {user, Logout} = props

  return (

    <Navbar className='Navbar'  bg="dark"  expand="lg">
		
		<Navbar.Collapse  id="basic-navbar-nav">
    <Nav className='mr-auto'>
    <Link className='Link' to="/">Home</Link>    
    <Link  className='Link' to="/Audio">Audio</Link>
    <Link className='Link' to="/Video">Video</Link> 
    <Link className='Link' to="/Pods">Pods</Link>    
    <Link className='Link' to="/Library">Library</Link>    
    </Nav>
    </Navbar.Collapse>
    
    { !user ? (
				<div>
						<Link  className='Link' to="/signin">SignIn</Link>
						<Link className='Link'  to="/signup">SignUp</Link>
					</div> ) : (

						<Button  variant="contained" color="secondary" onClick={Logout}>Logout</Button> )
}

  </Navbar>					
  )
}

export default MyNav
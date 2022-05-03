import React from 'react'
import Test1 from '../images/Test1.PNG'
import Test2 from '../images/Test2.PNG'


function Homepage(props) {

  const {btnSubmit} = props
  return <div className='Homepage'>
   

<form  className='form' onSubmit={btnSubmit}>
			<input  name="name"  type="text"  placeholder="Title"/>
			<input  name="description"  type="text"  placeholder="Post"/>
			<button  type="submit"  >Submit</button>
</form>  


<h1>Audio</h1>
<div className='topics'>
<div className='pics'>
    <img className='pics' src={Test1}  alt = ''/>
    <img className='pics' src={Test2}  alt = ''/>
</div>
</div>






</div>
    
  }

export default Homepage
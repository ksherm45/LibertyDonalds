import React from 'react'

function Video(props) {
  const {btnSubmit} = props
  return (
<form  className='form' onSubmit={btnSubmit}>
			<input  name="name"  type="text"  placeholder="Title"/>
			<input  name="description"  type="text"  placeholder="Post"/>
			<button  type="submit"  >Submit</button>
		</form>  )
}

export default Video
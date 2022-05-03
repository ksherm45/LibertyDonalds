import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Audio(props) {
	// we get this postId from the <Route path='/post/:postId'> we defined in App.js

const {postId} = useParams
const [audioPage, setaudioPage] = useState(null)	

useEffect(() => {
	const getData = async () => {
		let response = await axios.get(`http://localhost:5005/api/post/${postId}`)
		setaudioPage(response.data)
	}
	getData()
}, [postId])

const {btnSubmit} = props
  return (
<form  className='form' onSubmit={btnSubmit}>
			<input  name="name"  type="text"  placeholder="Title"/>
			<input  name="description"  type="text"  placeholder="Post"/>
			<button  type="submit"  >Submit</button>
		</form>  )
}

export default Audio
import './App.css';
import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import MyNav from './components/MyNav';
import Pods from './components/Pods';
import Audio from './components/Audio';
import Video from './components/Video';
import Library from './components/Library';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from './config';


function App() {
const [user, setUser] = useState(null)
const [posts, setPost] = useState([])
const [myError, setError] = useState(null)
const [fetchingUser, setFetchingUser] = useState(true)
const navigate = useNavigate()

useEffect(() => {
  const getData = async () => {
    let response = await axios.get(`${API_URL}/homepage`, {withCredentials: true})
    setPost(response.data)
    try{
      let userResponse = await axios.get(`${API_URL}/user`, {withCredentials: true})
      setFetchingUser(false)
      setUser(userResponse.data)
    }
    catch(err){
      setFetchingUser(false)
    }
  }
  getData()
}, [])

const handleSubmit = async (event) => {
  event.preventDefault()
  let newPost = {
    name: event.target.name.value,
    description: event.target.description.value,
  }
  console.log(newPost)
  let response = await axios.post('http://localhost:5005/api/post', newPost) // save this in a variable and put it into the .env file for deployment
  setPost([response.data, ...posts])
  navigate('/homepage')
}

const handleEdit = async (event, id) => {
  event.preventDefault()
  let editedPost = {
    name: event.target.name.value,
    description: event.target.description.value,
  }
  let response = await axios.patch(`http://localhost:5005/api/posts/${id}`, editedPost)
  let updatedPosts = posts.map((elem) => {
    if (elem._id === id) {
      elem.name = response.data.name
      elem.description = response.data.description
    }
    return elem
  })

  setPost(updatedPosts)
}

const handleDelete = async (id) => {
  await axios.delete(`http://localhost:5005/api/post/${id}`)

  let filteredPosts = posts.filter((elem) => {
    return elem._id !== id
  })

  setPost(filteredPosts)
  navigate('/homepage')
}


const handleSignIn = async (event) => {
  console.log('checking to ee signin')
  event.preventDefault()
  try {
    let newUser = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    let response = await axios.post(`${API_URL}/signin`, newUser, {withCredentials: true})
    setUser(response.data)
    navigate('/')
  }
  catch(err){
    setError(err.response.data)
  }
}

const handleAddProfile = async (event, id, name, desc) => {
  event.preventDefault()
  console.log("handle add test", event, id, name, desc)
  let addedPost = {id: id, name:name, desc:desc}
  let addPostResponse = await axios.patch(`${API_URL}/homepage`, {addedPost} ,{withCredentials: true})
  setUser( addPostResponse.data)
  navigate('/homepage')
}

const handleLogout = async () => {
  await axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
  setUser(null)

  navigate('/homepage')
}
  return (
    <div>
    <MyNav/>

    <Routes>

    <Route path="/Audio" element={<Audio btnSubmit={handleSubmit}/> } />
    <Route path="/Audio" element={<Audio btnAddProfile={handleAddProfile}/>} />

    <Route path="/homepage" element={<Homepage/>} />
    <Route path="/Audio" element={<Audio/>} />
    <Route path="/Video" element={<Video/>} />
    <Route path="/Pods" element={<Pods/>} />
    <Route path="/Library" element={<Library/> } />
    <Route path='/signin' element={<SignIn onSignIn={handleSignIn} />}   />
    <Route path='/signup' element={<SignUp />} /> 


    </Routes>

    </div>
  );
}

export default App;

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
import SingleAudio from './components/SingleAudio';
import SingleVideo from './components/SingleVideo'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from './config';
import Test from './components/Test';


function App() {
const [user, setUser] = useState(null)
const [posts, setPost] = useState([])
const [myError, setError] = useState(null)
const [fetchingUser, setFetchingUser] = useState(true)
const navigate = useNavigate()

useEffect(() => {
  const getData = async () => {
    let response = await axios.get(`${API_URL}/homepage`, {
      withCredentials: true,
    });
    setPost(response.data);
    try {
      let userResponse = await axios.get(`${API_URL}/user`, {
        withCredentials: true,
      });
      setFetchingUser(false);
      setUser(userResponse.data);
    } catch (err) {
      setFetchingUser(false);
    }
  };
  getData();
}, []);

const handleSubmitAudio = async (event) => {
  event.preventDefault();
  console.log("pic pic pic")

  let img = event.target.image.files[0]
  let formData = new FormData()

  formData.append("image" , img)
  formData.append("name" ,  event.target.name.value)
  formData.append("description" , event.target.description.value)
  formData.append("owner" , user._id)

  // let newPost = {
  //   name: event.target.name.value,
  //   description: event.target.description.value,
  //   image: event.target.image.value,
  //   owner: user._id,
  // };
  
  let response = await axios.post("http://localhost:5005/api/uploadFile", formData); // save this in a variable and put it into the .env file for deployment
  setPost([response.data, ...posts]);
  console.log(response.data);
  navigate("/homepage");
}; 


const handleSubmit = async (event) => {
  event.preventDefault();
  let newPost = {
    name: event.target.name.value,
    description: event.target.description.value,
    youtube: event.target.youtube.value,
    //image: event.target.audio.value,
    owner: user._id,
  };
  if(event.target.youtube.value){
    let videoPage = event.target.youtube.value
	
			let arr = videoPage.split(' ')
			let src = ""
			
			for(let i = 0; i<arr.length; i++){
			 if(arr[i].indexOf('src') !== -1)
			   src = arr[i]
	}
			let http = src.split('=')[1]
	
			let youtubeSrc = http.slice(1,http.length-1)
			newPost.youtube = youtubeSrc
}
  
  
  let response = await axios.post("http://localhost:5005/api/post", newPost); // save this in a variable and put it into the .env file for deployment
  setPost([response.data, ...posts]);
  console.log(response.data);
  navigate("/homepage");
}; 

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

    <Route path="/Audio" element={<Audio btnSubmit={handleSubmitAudio} btnAddProfile={handleAddProfile}/> } />
    <Route path="/audio/:audioId" element={<SingleAudio btnAddProfile={handleAddProfile} btnDelete={handleDelete} />} />
    <Route path="/video/:videoId" element={<SingleVideo btnAddProfile={handleAddProfile} btnDelete={handleDelete} />} />
    <Route path="/Video" element={<Video btnSubmit={handleSubmit} btnAddProfile={handleAddProfile}/> } />
    <Route path="/Pods" element={<Pods btnSubmit={handleSubmit} btnAddProfile={handleAddProfile}/> } />
    <Route path="/test" element={<Test btnSubmit={handleSubmit} btnAddProfile={handleAddProfile} />} />
    <Route path="/" element={<Homepage/>} />
    <Route path="/homepage" element={<Homepage/>} />
    <Route path="/Library" element={<Library/> } />
    <Route path='/signin' element={<SignIn onSignIn={handleSignIn} />}   />
    <Route path='/signup' element={<SignUp />} /> 


    </Routes>

    </div>
  );
}

export default App;

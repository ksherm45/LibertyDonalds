import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"

function Test({btnSubmit, btnAddProfile}) {


  useEffect(() => {
	  const getData = async () => {
		let response = await axios.get(`http://localhost:5005/api/get-posts`);
		//iFrame = response.data[8].youtube.slice(7,-10);
		console.log("here is the video", iframe);
		setVideoPage(response.data);
	  };
	  getData();
	}, []);

  
  const [videoPage, setVideoPage] = useState(null);
	let iframe = 'https://www.youtube.com/embed/0ZJgIjIuY7U'
  var Title = document.getElementsByName("title")[0].value;
  var Post = document.getElementsByName("post")[0].value;
  var Youtube = document.getElementsByName("youtube")[0].value;
  var Audio = document.getElementsByName("audio")[0].value;

  const formChanged = async () => {
    let Youtube = []
  }



  return (
	  <div>
		<form className="form" onSubmit={btnSubmit}>
		<label>Title</label>
		  <input name="title" type="text" onkeyup={formChanged} onchange={formChanged} placeholder="Title" />
		<label>Post</label>
		  <input name="post" type="text" onkeyup={formChanged} onchange={formChanged} placeholder="Post" />
		<label>Youtube</label>
		  <input name="youtube" type="text" onkeyup={formChanged} onchange={formChanged} placeholder="Youtube" />
		<label>Audio</label>
		  <input name="audio" type="text" onkeyup={formChanged} onchange={formChanged} placeholder="Audio" />




		  <button type="submit">Submit</button>
		</form>
		<div className="center">
		  {videoPage
			? videoPage.map((elem, i) => {
				return (
				  <div key={elem.name + i} className="post-card">
					<h3>{elem.name}</h3>
					<h5>{elem.description}</h5>
										
				  </div>
				);
			  })
			: null}
		</div>
	  </div>
	);
  }

export default Test
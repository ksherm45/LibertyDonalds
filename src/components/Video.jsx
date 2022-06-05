import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Video({ btnSubmit, btnAddProfile }) {
	// we get this postId from the <Route path='/post/:postId'> we defined in App.js
	const [videoPage, setVideoPage] = useState(null);

	useEffect(() => {
	  const getData = async () => {
		let response = await axios.get(`http://localhost:5005/api/get-posts`);
		await setVideoPage(response.data);

		return response.data

}
	  getData()
	}, []);
  
	if (!videoPage) {
	  return <p>loading...</p>;
	}
  
	return (
	  <div>
		<form className="form" onSubmit={btnSubmit}>
		<label>Title</label>
		  <input name="name" type="text" placeholder="Title" />
		<label>Post</label>
		  <input name="description" type="text" placeholder="Post" />
		<label>Youtube</label>
		  <input name="youtube" type="text" placeholder="Youtube" />
		<label>Audio</label>
		  <input name="image" type="file" placeholder="image" />




		  <button type="submit">Submit</button>
		</form>
		<div className="center">
		  {videoPage
			? videoPage.map((elem, i) => {
				return (
				  <div key={elem.name + i} className="post-card">
					<h3>{elem.name}</h3>
					<h5>{elem.description}</h5>
					
				{elem.youtube ? <iframe  width="560" height="315" src={elem.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen > </iframe> : null }
					
				  </div>
				);
			  })
			: null}
		</div>
	  </div>
	);
  }

export default Video


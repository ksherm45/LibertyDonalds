import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


function Pods({ btnSubmit, btnAudioSubmit }) {
	// we get this postId from the <Route path='/post/:postId'> we defined in App.js
	const [podPage, setPodPage] = useState(null);
  
	useEffect(() => {
	  const getData = async () => {
		let response = await axios.get(`http://localhost:5005/api/get-images`);
		console.log("here is the podssssss", response.data);
		setPodPage(response.data);
	  };
	  getData();
	}, []);
  
	
	return (
	  <div className="form-page">

<form className="formAudio" onSubmit={btnAudioSubmit}>
        <input name="name" type="text" placeholder="Title" />
		<textarea className="comment" form="usrform">Enter text here...</textarea>
        <input name="image" type="file" placeholder="image" />  
          <button type="submit">Submit</button>
      </form>

	  <form className="formAudio" onSubmit={btnSubmit}>
		
		  <input name="name" type="text" placeholder="Title" />
		  <textarea className="comment" form="usrform">Enter text here...</textarea>
		  <input name="youtube" type="text" placeholder="Youtube" />

		  <button type="submit">Submit</button>
		</form>
		
	  </div>
	);
  }

export default Pods
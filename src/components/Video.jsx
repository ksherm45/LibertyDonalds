import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {Text} from 'react-native';


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
		{/* <form className="form" onSubmit={btnSubmit}>
		
		  <input name="name" type="text" placeholder="Title" />
		
		  <input name="description" type="text" placeholder="Post" />
		
		  <input name="youtube" type="text" placeholder="Youtube" />

		  <button type="submit">Submit</button>
		</form> */}

		<div className="card">
		  {videoPage
			? videoPage.map((elem, i) => {
				return (

				  <div key={elem.name + i} className="card-body">
					<h3 className="card-name">{elem.name}</h3>
										
				{elem.youtube ? <iframe  width="560" height="315" src={elem.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen > </iframe> : null }

					<Text ellipsizeMode='tail' numberOfLines={2} >
                  <div  className="card-description">{elem.description}
                  </div>
                  </Text>	

				<div key={elem._id} >
                            <Link to={`/video/${elem._id}`}>
							<button className="card-btn" id='neon'>Read More!</button>
							</Link>
                            
                        </div> 
				  </div>
				  
				);
				
			  })
			: null}
			
		</div>
	  </div>
	);
  }

export default Video


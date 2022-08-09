import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {Text} from 'react-native';

function Homepage({ btnSubmit, btnAddProfile }) {
  // we get this postId from the <Route path='/post/:postId'> we defined in App.js
  const [homePage, setHomePage] = useState(null);


  useEffect(() => {
    const getData = async () => {

      let audio = `http://localhost:5005/api/get-images`
      let video = `http://localhost:5005/api/get-posts`

      const requestAudio = await axios.get(audio);
      const requestVideo = await axios.get(video);

     // let response = await axios.all([requestAudio, requestVideo])
//       .then(axios.spread((responseAudio, responseVideo) => {

//         console.log("here is the responses data" , responseAudio.data, responseVideo.data)
//         // const responseAudio = responses[0]
//         // const responseVideo = responses[1]
//       }))
     // console.log("here is the home", requestAudio.data, requestVideo.data );
      let bigArray = [...requestAudio.data, ...requestVideo.data]
      console.log("here is the bigArr", bigArray );

      setHomePage(bigArray);
    };
    getData();
  }, []);

  if (!homePage) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {/* <form className="form" onSubmit={btnSubmit}>
        <input name="name" type="text" placeholder="Title" />
        <input name="description" type="text" placeholder="Post" />
        <button type="submit">Submit</button>
      </form> */}
      <div className="card">
        {homePage
          ? homePage.map((elem, i) => {
            if(elem.youtube) {

            
              return (
                
        <div key={elem.name + i} className="card-body">
        <Link to={`/video/${elem._id}`}>
				<h3 className="card-name">{elem.name}</h3>
        </Link>				
					
				{elem.youtube ? <iframe  width="560" height="315" src={elem.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen > </iframe> : null }
					
        <Text ellipsizeMode='tail' numberOfLines={2} >
           <div  className="card-description">{elem.description} </div>
        </Text>

			<div key={elem._id} >
        <Link to={`/video/${elem._id}`}>
					<button className="card-btn" id='neon'>Read More!</button>
				</Link>
                            
      </div> 
		 </div>
                
                
              );
            }else{
              return (
                <div key={elem.name + i} className="card-body">
                <Link to={`/audio/${elem._id}`}>
                <h3 className="card-name">{elem.name}</h3>
                </Link>
                {elem.image ? 
                <div className="images">
                <img   src={elem.image} height={315} width={560} alt="pic"/>
                </div>
                 : null  }
                  <Text ellipsizeMode='tail' numberOfLines={4} >
                  <div  className="card-description">{elem.description}
                  </div>
                  </Text>
                  <div key={elem._id}>
                            <Link to={`/audio/${elem._id}`}>
                            <button className="card-btn" id='neon'>Read More!</button>
                            </Link>
                            
                        </div>  
                </div>
              );
            }
            })
          : null}
      </div>
    </div>
  );
}

export default Homepage;
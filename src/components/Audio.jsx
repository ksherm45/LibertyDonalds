import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {Text} from 'react-native';

function Audio({ btnSubmit, btnAddProfile }) {
  // we get this postId from the <Route path='/post/:postId'> we defined in App.js
  const [audioPage, setaudioPage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`http://localhost:5005/api/get-images`);
      console.log("here is the audio", response.data);
      setaudioPage(response.data);
    };
    getData();
  }, []);

  if (!audioPage) {
    return <p>loading...</p>;
  }

  return (
    <div >
      <form className="form" onSubmit={btnSubmit}>
        <input name="name" type="text" placeholder="Title" />
        <input name="description" type="text" placeholder="Post" />
        <input name="image" type="file" placeholder="image" />  
          <button type="submit">Submit</button>
      </form>

      <div className="card">
        {audioPage
          ? audioPage.map((elem, i) => {
              return (
                
                <div key={elem.name + i} className="card-body">
                <h3 className="card-name">{elem.name}</h3>
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
            })
          : null}
      </div>
    </div>
   
  );
}

export default Audio;
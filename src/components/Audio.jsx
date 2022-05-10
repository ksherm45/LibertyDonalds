import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Audio({ btnSubmit, btnAddProfile }) {
  // we get this postId from the <Route path='/post/:postId'> we defined in App.js
  const [audioPage, setaudioPage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`http://localhost:5005/api/get-posts`);
      console.log("here is the audio", response.data);
      setaudioPage(response.data);
    };
    getData();
  }, []);

  if (!audioPage) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <form className="form" onSubmit={btnSubmit}>
        <input name="name" type="text" placeholder="Title" />
        <input name="description" type="text" placeholder="Post" />
        <button type="submit">Submit</button>
      </form>
      <div className="center">
        {audioPage
          ? audioPage.map((elem, i) => {
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

export default Audio;
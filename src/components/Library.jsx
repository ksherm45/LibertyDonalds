import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';


function Library() {

const [file, selectedFile] = useState(null);

const onFileChange = event => {
    selectedFile( event.target.files[0]);
  };

const onFileUpload = (e) => {
  e.preventDefault()
  let formData = new FormData();
  console.log(e.target.image)

  let image = e.target.image.files[0]
  formData.append(
    "image",
    image,
    
  );


 let imageResponse = axios.post("http://localhost:5005/api/uploadFile", formData)
 console.log("img response" , imageResponse)
};

// const fileData = () => {
//   if(selectedFile){
//     return  <div>
//       <h2>File Details:</h2>
//       <p>File Name: {selectedFile.name} </p>
//       <p>File Type: {selectedFile.type} </p>
//       <p>Last Modified: {""} {selectedFile.lastModifiedDate.toDateString()} </p>
//     </div>
//  }
 
//   return  <div>
//   <br/>
//   <h4>Choose before pressing the UPLOAD button</h4>
//  </div> 
// }


// The titles will render if I do not use the form. With the form nothing renders on the screen. 

  return (
    <div>
      <h1> Geeks for Geeks</h1>
      <h3>File Upload using React</h3>
    <form onSubmit={onFileUpload}>
    <input type="file" name = "image" />
    <button  type="submit" >Upload! </button>
    </form>
    
    </div>
  );
};

export default Library
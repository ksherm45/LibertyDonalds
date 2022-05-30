import React from 'react'
import YouTube from 'react-youtube'


//https://youtu.be/_nBlN9yp9R8
function Vidz(props) {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const {videoId} = this.props.first

 const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target)
  }
 
  return (
    <div>
    <YouTube
    videoId= {'https://youtu.be/_nBlN9yp9R8'} 
    opts={opts} 
    onReady={videoOnReady}
   /> 
  </div>
  )

}


export default Vidz
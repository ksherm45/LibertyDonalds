import React from 'react'
import { SocialIcon } from 'react-social-icons';



function Footer() {
  return (
    <div>
      <div className='icons'>
      <SocialIcon
              url="https://open.spotify.com/show/1Z9HZ1A0797an33EJv2dAs?si=uVDPBvPxT8y6IwLGRqjgrw"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />
      
      <SocialIcon
              url="https://m.youtube.com/channel/UCunS20Z14fwONSDnIiCwsyw"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />

       <SocialIcon
              url="https://instagram.com/libertydonalds?igshid=YmMyMTA2M2Y="
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
               />

        <SocialIcon
              url="https://twitter.com/LibertyDonalds"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
               />

        <SocialIcon
              url="https://go.ivoox.com/sq/814127"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
               />
       </div>
    
    </div>
  )
}

export default Footer
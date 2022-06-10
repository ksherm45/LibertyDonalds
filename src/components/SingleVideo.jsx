import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'



function SingleVideo(props) {
    const {videoId} = useParams()
    const [videoDetail, setvideoDetail] = useState(null)

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get (`http://localhost:5005/api/blahblah/${videoId}`)

            console.log("check this test kaj" , response.data)
            setvideoDetail(response.data)
        }
        getData()
    }, [videoId])

    if(!videoDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    
    return(

            <div >
            <h4 className='innerText'>Name: {videoDetail.name}</h4>
            <h4 className='innerText'>Desc: {videoDetail.description}</h4>
            <iframe  width="560" height="315" src={videoDetail.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen > </iframe>            </div>
          );
        
      
    
    
}



export default SingleVideo
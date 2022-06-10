import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'



function SingleAudio(props) {
    const {audioId} = useParams()
    const [audioDetail, setaudioDetail] = useState(null)

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get (`http://localhost:5005/api/blah/${audioId}`)

            console.log("check this test kaj" , response.data)
            setaudioDetail(response.data)
        }
        getData()
    }, [audioId])

    if(!audioDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    
    return(

            <div >
            <h4 className='innerText'>Name: {audioDetail.name}</h4>
            <h4 className='innerText'>Desc: {audioDetail.description}</h4>
            <img src= {audioDetail.image} alt = "josh is my hero"/>
            </div>
          );
        
      
    
    
}



export default SingleAudio
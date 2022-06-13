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

            <div>
            <div>
            <img src= {audioDetail.image} height={300} width={300}  alt = "josh is my hero"/>
            </div>
            <h4 className='innerText'> {audioDetail.name}</h4>
            <h4 className='innerText'> {audioDetail.description}</h4>
        
            </div>
          );
        
      
    
    
}



export default SingleAudio
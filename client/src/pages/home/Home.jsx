import React,{useEffect, useState} from 'react'
import { Container } from './Home.styles'
import Card from '../../components/card/Card'
import axios from "axios"

const Home = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get('/videos/random')
            console.log(res.data)
            setVideos(res.data)
        }
        fetchVideos();
    },[])

    return (
        <Container>
            
            {videos.map((video) => (
                <Card key={video._id} video={video} />
            ))}
            
        </Container>
    )
}

export default Home

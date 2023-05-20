import React, { useEffect, useState } from 'react'
import { ChannelImage, ChannelName, Container, Details, Image, Info, Texts, Title } from './Card.styles'
import CourseImage from "../../img/reactcourse.png"
import ChannelImg from "../../img/channelImg.jpg"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { format } from 'timeago.js'

const Card = ({ type, video }) => {
    const [channel, setChannel] = useState([])

    useEffect(() => {
        const fetchChannel = async () => {
            const res = await axios.get(`/users/find/${video.userId}`)
            console.log(res.data)
            setChannel(res.data)
        }
        //fetchChannel();
    }, [video.userId])
    
    return (
        <Link to= {`/video/${video._id}`} style={{ textDecoration: "none", color: "inherit" }}>

            <Container type={type}>
                <Image type={type} src={video.imgUrl} alt="Videos" />
                <Details type={type}>
                    <ChannelImage
                        type={type}
                        src={channel.img}
                        alt=''
                    />
                    <Texts>
                        <Title>{video.title}</Title>
                        <ChannelName>{channel.name}</ChannelName>
                        <Info>{video.views} views • {format(video.createdAt)}</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card

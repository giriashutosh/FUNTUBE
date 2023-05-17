import React from 'react'
import { ChannelImage, ChannelName, Container, Details, Image, Info, Texts, Title } from './Card.styles'
import CourseImage from "../../img/reactcourse.png"
import ChannelImg from "../../img/channelImg.jpg"
import { Link } from 'react-router-dom'
const Card = ({ type }) => {
    return (
        <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>

            <Container type={type}>
                <Image type={type} src={CourseImage} alt="Videos" />
                <Details type={type}>
                    <ChannelImage
                        type={type}
                        src={ChannelImg}
                        alt=''
                    />
                    <Texts>
                        <Title>Test Video</Title>
                        <ChannelName>React Developer</ChannelName>
                        <Info>660,908 views • 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card

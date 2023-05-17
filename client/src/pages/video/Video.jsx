import React from 'react'
import { Subscribe, Description, ChannelCounter, ChannelName, Image, ChannelInfo, Container, Content, Recommendation, VideoWrapper, Title, Details, Info, Buttons,Button, Hr, Channel, ChannelDetail } from './Video.styles'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../../components/Comments/Comments';
import Card from "../../components/card/Card"
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/f55qeKGgB_M"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2023</Info>
          <Buttons>
            
            
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            <Button>
            <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
            <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src = "https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
            <ChannelDetail>
              <ChannelName>Web Dev</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        
      </Recommendation>
    </Container>
  )
}

export default Video


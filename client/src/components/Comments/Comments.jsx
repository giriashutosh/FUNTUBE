import React from 'react'
import Comment from '../Comment/Comment'
import { Avatar, Container, NewComment, Input } from './Comments.styles'

const Comments = () => {
  return (
      <Container>
          <NewComment>
              <Avatar src = "https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
              <Input placeholder = "Add a comment"/>
          </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments

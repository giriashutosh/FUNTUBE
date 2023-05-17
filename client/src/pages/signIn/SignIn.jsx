import React from 'react'
import { Link, Button, Container, Input, Links, More, SubTitle, Title, Wrapper } from './SignIn.styles'

const SignIn = () => {
  return (
    <Container>
          <Wrapper>
              <Title>Sign In</Title>
              <SubTitle>to continue to FunTube</SubTitle>
              <Input placeholder='username'/>
              <Input type = "password" placeholder='password'/>
              <Button>Sign In</Button>
              <Title>or</Title>
              <Input placeholder='username'/>
              <Input placeholder='email'/>
              <Input type = "password" placeholder='password'/>
              <Button>Sign Up</Button>
          </Wrapper>
          <More>
              English(USA)
              <Links>
                  <Link>Help</Link>
                  <Link>Privacy</Link>
                  <Link>Terms</Link>
              </Links>
          </More>
    </Container>
  )
}

export default SignIn

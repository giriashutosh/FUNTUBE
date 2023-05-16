import React from 'react'
import { Container, Search, Wrapper, Input, Button } from './Navbar.styles'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
              <Search>
                  <Input placeholder='Search' />
                  <SearchOutlinedIcon />
              </Search>
              <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
              </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar


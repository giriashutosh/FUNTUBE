import React from 'react'
import { Container, Search, Wrapper, Input, Button } from './Navbar.styles'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
              <Search>
                  <Input placeholder='Search' />
                  <SearchOutlinedIcon />
        </Search>
        <Link to = "signin" style={{textDecoration: "none"}}>
               <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
              </Button>
        </Link>
             
      </Wrapper>
    </Container>
  )
}

export default Navbar


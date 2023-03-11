import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const Logo = styled.img`
  width: 148px;
  height: 33px;
`
const MenuItem = styled.li`
    font-size: 14px;
    font-weight: 600;
    margin-right: 46px;
`
const Menu = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: end;
`
const LiTagsA = styled.a`
  text-decoration: none;
  color: black;
  transition: 0.5s;
  :hover{
    color: #1677ff;  
  }
`

export default function ButtonAppBar() {
  const [menu, setMenu] = React.useState(["Blog", "Socials", "Past Socials", "Clubs", "Contact"])
  const liItem = menu.map(element => {
      return <MenuItem><LiTagsA href=''>{element}</LiTagsA></MenuItem>
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: 'transparent', padding: "15px 100px", boxShadow: "none"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Logo edge="start" src={'./logo.png'} alt="logo"/>
          </Typography>
          <Menu>
            {liItem}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
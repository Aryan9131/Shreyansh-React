import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Card from './Card'
function Content(){
    return(
      <Container id='mainContent'>
          <Box id="leftContent">
              <Card />
              <Card imgUrl={"https://mui.com/static/images/cards/paella.jpg"}/>
              <Card imgUrl={"https://mui.com/static/images/cards/paella.jpg"}/>
              <Card imgUrl={"https://mui.com/static/images/cards/paella.jpg"}/>
          </Box>
          
           <Box id="rightContent">
              <Card imgUrl={"https://mui.com/static/images/cards/paella.jpg"}/>
              <Card imgUrl={"https://mui.com/static/images/cards/paella.jpg"}/>
              <Card imgUrl={"https://mui.com/static/images/cards/paella.jpg"}/>
           </Box>
      </Container>
    )
 }
 
 export default Content;

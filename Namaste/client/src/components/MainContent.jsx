import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PostCard from './PostCard.jsx'
import Card from './Card'
function Content(){
    return(
      <Box id='mainContent'>
          <Box id="leftContent">
              <PostCard />
              <h3>Recent: </h3>
              <Card imgUrl={"https://cdn.pixabay.com/photo/2022/04/06/23/50/flower-7116555_640.jpg"}/>
              <Card imgUrl={"https://cdn.pixabay.com/photo/2024/04/17/15/06/ai-generated-8702284_640.jpg"}/>
              <Card imgUrl={"https://cdn.pixabay.com/photo/2016/08/01/13/50/blood-maple-1561055_1280.jpg"}/>
          </Box>
          
           <Box id="rightContent">
              <Card imgUrl={"https://cdn.pixabay.com/photo/2020/06/20/16/13/male-5321547_640.jpg"}/>
              <Card imgUrl={"https://cdn.pixabay.com/photo/2020/06/26/14/46/india-5342927_640.jpg"}/>
              <Card imgUrl={"https://mui.com/static/images/cards/paella.jpg"}/>
           </Box>
      </Box>
    )
 }
 
 export default Content;

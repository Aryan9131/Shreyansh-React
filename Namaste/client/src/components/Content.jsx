import SearchBar from './Search'
import MainContent from './MainContent'
import Box from '@mui/material/Box';

function Content(){
    return(
      <Box id='content'  style={{ width: '90vw',margin:"10px 5px" }}>
          <SearchBar/>
          <MainContent/>
      </Box>
    )
 }
 
 export default Content;
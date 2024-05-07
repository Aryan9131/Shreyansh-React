import SearchBar from './Search'
import MainContent from './MainContent'
import Container from '@mui/material/Container';

function Content(){
    return(
      <Container id='content'  style={{ width: '70vw',margin:"10px 5px" }}>
          <SearchBar/>
          <MainContent/>
      </Container>
    )
 }
 
 export default Content;
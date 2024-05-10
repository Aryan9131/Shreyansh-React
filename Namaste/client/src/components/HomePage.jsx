import Navbar from './NavBar';
import Content from './Content'
import Container from '@mui/material/Container';
import SideBar from './SideBar'
function Home(){
    return(
      <div id='homePage' >
          <Navbar />
          <Content />
          <SideBar/>
      </div>
    )
 }
 
 export default Home;
 
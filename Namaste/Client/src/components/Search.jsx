import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/More';
function Search(){
   return(
      <>
        <div id="search">
                <SearchIcon/>
                <input type="text" id="searchInput" /> 
               <MoreIcon/>
        </div>
      </>
   )
}

export default Search
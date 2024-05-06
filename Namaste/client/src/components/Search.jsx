function SearchBar(){
  return(
    <div id='search'>
         <form method="GET" id="searchForm">
           <input id="searchInput" type="search" placeholder="Search" aria-label="Search" />
           <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar;

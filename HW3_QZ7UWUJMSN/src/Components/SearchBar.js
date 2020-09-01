function Search() {
     return (
       <div className="search-bar">
         <input type="search" placeholder="SearchBar" />
   
         <style jsx>{`
           .search-bar {
             width: 30rem;
             max-width: 100%;
             margin-bottom: 8rem;
             border-bottom: 2px solid var(--color-secondary);
             position: relative;
             font-size: 1.6rem;
           }
           .search-bar input {
             width: 100%;
             height: 100%;
             border: 0;
             outline: none;
             font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
               Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
           }
         `}</style>
       </div>
     );
   };
   
   export default Search;
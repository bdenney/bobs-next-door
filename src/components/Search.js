import React from "react"

function Search({onSearch}) {
    
    function handleChange(event) {
        console.log(event.target)
        console.log(event.target.value)
        const searchElement = event.target;
        const searchText = searchElement.value;
        onSearch(searchText);
    }

    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={handleChange} />
        </div>
    );
}

export default Search;
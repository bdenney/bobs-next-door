import React from "react"

function Search({onSearch}) {
    
    function handleChange(event) {
        const searchElement = event.target;
        const searchText = searchElement.value;
        onSearch(searchText);
    }

    return(
        <div>
            <input type="text" placeholder="Search names..." onChange={handleChange} />
        </div>
    );
}

export default Search;
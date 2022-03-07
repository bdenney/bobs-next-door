import React from "react"
import {v4 as uuid} from "uuid";

function NewStoreForm({addNewStore}) {

    function handleSubmit(event) {
        event.preventDefault();

        const formElement = event.target;

        const storeData = {
            "id": uuid(),
            "name": formElement["name"].value,
            "image": formElement["image"].value,
            "season": formElement["season"].value,
            "episode": formElement["episode"].value
        }

        addNewStore(storeData);

        formElement.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Store Name"/>
            <input type="text" id="image" placeholder="Image URL" />
            <input type="number" id="season" placeholder="Season" step="1"/>
            <input type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;
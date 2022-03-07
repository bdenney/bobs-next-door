import React from "react"
import Store from "./Store"

function StoreList({storeData}) {


    return(
        <table>
            <tbody>
                <tr>
                    <th>
                        <h3>Name</h3>
                    </th>
                    <th>
                        <h3>Image</h3>
                    </th>
                    <th>
                        <h3>Season</h3>
                    </th>
                    <th>
                        <h3>Episode</h3>
                    </th>
                </tr>
                {
                    storeData.map(store => {
                        return <Store key={store.id} store={store} />
                    })
                }
            </tbody>
        
        </table>
    );
}

export default StoreList;
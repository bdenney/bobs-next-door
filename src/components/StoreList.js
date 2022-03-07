import React from "react"
import Store from "./Store"

function StoreList({storeData}) {


    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
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
import React from 'react'

function Store({store}) {
    return (
    <tr>
        <td>
            {store.name}
        </td>
        <td>
            <a href={store.image} target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            {store.season}
        </td>
        <td>
            {store.episode}
        </td>
    </tr>
    );
}

export default Store
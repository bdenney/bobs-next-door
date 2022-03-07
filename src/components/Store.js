import React from 'react'

function Store({store}) {
    return (
    <tr>
        <td className="row-name">
            <span>{store.name}</span>
        </td>
        <td>
            <a href={store.image} target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            <span>{store.season}</span>
        </td>
        <td>
            <span>{store.episode}</span>
        </td>
    </tr>
    );
}

export default Store
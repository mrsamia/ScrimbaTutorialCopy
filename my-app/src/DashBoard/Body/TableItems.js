import React from 'react';

function TableItems(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.commit}</td>
            <td>{props.date}</td>
            <td>{props.icon}</td>
        </tr>
    );
}

export default TableItems;
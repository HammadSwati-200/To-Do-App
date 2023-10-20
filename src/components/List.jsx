import React from 'react';
import './list.css';

export default function List(props) {
    return (
        <div>
            <ul className="list-group w-25 m-auto mb-2">
                <li className="list-group-item d-flex justify-content-between align-items-center border-primary"> {props.item}<i className="fa-solid fa-trash del-icon bg-primary text-white" onClick={(e) => {
                    props.deleteItem(props.index);
                }}></i></li>
            </ul>
        </div >
    )
}

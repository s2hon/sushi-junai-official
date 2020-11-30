import React from "react";

function MenuItems(props) {
    return (
        <>
        <h5 className={props.oncePerOrder}>{props.name}<i className={`${props.fish}`}></i></h5>
        <h6>{props.price}</h6>
        <p>{props.description}</p>
        {props.children}
        </>
    )
}

export default MenuItems;
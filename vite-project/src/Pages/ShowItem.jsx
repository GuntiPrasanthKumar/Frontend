import React from 'react';
import {useContext} from "react";
import Context from "../Context.jsx";
import Item from "../Components/Item.jsx";
import './ShowItem.css'
import {Link} from "react-router-dom";

function ShowItem() {
    const {submitItem, setSubmitItem} = useContext(Context);
    return (
        <>
            <div className='showitem-container'>
                {submitItem.map((ele,index) => (
                    <Link to={`/itemdetails/${ele.id}`}>
                        <Item key={index} name={ele.name} brand={ele.brand} price={ele.price} size={ele.size} image={ele.image}/>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default ShowItem;
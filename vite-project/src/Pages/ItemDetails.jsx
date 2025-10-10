import React, {useContext, useEffect, useState} from 'react';
import './ItemDetails.css'
import Context from "../Context.jsx";
import {useParams} from "react-router-dom";

function ItemDetails(props) {

    const {submitItem, setSubmitItem} = useContext(Context);
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const item = submitItem.find(ele => ele.id === parseInt(id));
        setData(item);
    }, [id, submitItem]);
    if(!data) {
        return <h2>Loading...</h2>
    }
    return (
        <div className='item-details-container'>
            <div className='item-details-image'>
                <img src={data.image} alt=''/>
            </div>
            <div className='item-details-info'>
                <div className='item-details-name'>{data.name}</div>
                <div className='item-details-brand'>{data.brand}</div>
                <div className='item-details-price'>{data.price}</div>
                <div className='item-details-size'>{data.size}</div>
                <div className='item-details-description'>{data.description}</div>
            </div>
        </div>
    );
}

export default ItemDetails;
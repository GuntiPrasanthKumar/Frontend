import React from 'react';
import './Item.css'

function Item({name, brand, price, image}) {
    return (
        <div className='item'>
            <div className='item-image'>
                <img src={image} alt=''/>
            </div>
            <div className='item-info'>
                <div className='item-name'>{name}</div>
                <div className='item-brand'>{brand}</div>
                <div className='item-price'>{price}</div>
            </div>
        </div>
    );
}

export default Item;
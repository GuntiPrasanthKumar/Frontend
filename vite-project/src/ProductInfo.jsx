import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import IMG from "./assets/react.svg"

function ProductInfo() {
    const Data = [

    ]
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchedProduct = Data.find(item => item.id === parseInt(productId));
        setProduct(fetchedProduct);
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={IMG} alt={product.name} />
            <p>{product.description}</p>
        </div>
    );
}

export default ProductInfo;
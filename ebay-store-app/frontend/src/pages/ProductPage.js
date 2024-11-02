import React, { useState, useEffect } from 'react';
import { getProduct } from '../services/apiService';

const ProductPage = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProduct(productId);
            setProduct(data);
        };
        fetchProduct();
    }, [productId]);

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ProductPage;

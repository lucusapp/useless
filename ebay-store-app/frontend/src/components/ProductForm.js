import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [url, setUrl] = useState('');
    const [product, setProduct] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://automatic-space-sniffle-q799r5rj96rfqq6-5000.app.github.dev/', { url });
            setProduct(response.data);
        } catch (error) {
            console.error('Error al obtener los datos del producto:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="url">URL del producto de AliExpress:</label>
                <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Introduce la URL del producto"
                />
                <button type="submit">Obtener Producto</button>
            </form>

            {product && (
                <div>
                    <h2>{product.title}</h2>
                    <p>Precio: {product.price}</p>
                    <p>Descripción: {product.description}</p>
                </div>
            )}
        </div>
    );
};

export default ProductForm;

// Update your Products.js component

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';
import './Products.css';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    const openModal = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImageUrl('');
        setIsModalOpen(false);
    };

    const handleModalOverlayClick = () => {
        closeModal();
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <div className="product-image">
                        <img
                            src={product.image}
                            alt=""
                            onClick={() => openModal(product.image)}
                            className={selectedImageUrl ? 'enlarged' : ''}
                        />
                    </div>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}

            {isModalOpen && (
                <div className="modal" onClick={handleModalOverlayClick}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <img src={selectedImageUrl} alt="Full Size" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;

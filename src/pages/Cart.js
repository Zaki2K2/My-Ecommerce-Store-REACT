import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const isCartEmpty = products.length === 0;

    // Easypaisa account number
    const easypaisaAccountNumber = '03315527077';

    return (
        <div>
            <h3 className="cart-title">MY CART</h3>
            <div className="cartWrapper">
                {isCartEmpty ? (
                    <div className="empty-cart-message">
                        Your cart is empty.
                        <Link to="/" className="btn">
                            Go back to Home
                        </Link>
                    </div>
                ) : (
                    products.map((product) => (
                        <div key={product.id} className="cartCard">
                            <img src={product.image} alt="" className="cart-image" />
                            <div className="cart-info">
                                <h5 className="cart-title">{product.title}</h5>
                                <h5 className="cart-price">{product.price}</h5>
                            </div>
                            <button
                                className="btn remove-btn"
                                onClick={() => handleRemove(product.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Payment button */}
            {!isCartEmpty && (
                <div className="payment-section">
                    <p>Proceed to payment through Easypaisa:</p>
                    <a
                        href={`https://easypaisa.com.pk/mobile-account#pay=${easypaisaAccountNumber}`}
                        className="btn payment-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Pay with Easypaisa
                    </a>
                </div>
            )}
        </div>
    );
};

export default Cart;

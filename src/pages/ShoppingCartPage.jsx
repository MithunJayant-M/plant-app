import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';

const ShoppingCartPage = ({ cart, increaseQuantity, decreaseQuantity, removeItem }) => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart-page">
            <Header cartCount={totalItems} />
            <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            removeItem={removeItem}
                        />
                    ))}
                    <h3>Total Items: {totalItems}</h3>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    <button>Checkout</button>
                    <button>Continue Shopping</button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCartPage;

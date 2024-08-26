import React from 'react';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item)}>+</button>
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <button onClick={() => removeItem(item)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;

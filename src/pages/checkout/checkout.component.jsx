import React, { useContext } from 'react';
import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { CartContext } from '../../providers/cart/cart.provider';

const Checkout = () => {
    const { cartItems, cartTotalPrice } = useContext(CartContext);
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className="total">TOTAL: ${cartTotalPrice}</div>
            <div className="test-warning">
                * Please use the following test credit cart for payments*
                <br/>
                4242 4242 4242 4242 - Exp: 10/20 - CVC: 123
            </div>
            <StripeCheckoutButton price={cartTotalPrice} />
        </div>
    )
}
export default Checkout;

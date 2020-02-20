import React from 'react'
import { Query, Mutation } from 'react-apollo'

import CartDropdown from './cart-dropdown.component'
import { TOGGLE_CART_HIDDEN } from '../../graphql/mutation'
import { GET_CART_ITEMS } from '../../graphql/query'


const CartDropdownContainer = () => {
    return (
        <Mutation mutation={TOGGLE_CART_HIDDEN}>
            {
                toggleCartHidden => (
                    <Query query={GET_CART_ITEMS}>
                        {
                            ({ data: { cartItems } }) => (
                                <CartDropdown 
                                    cartItems={cartItems}
                                    toggleCartHidden={toggleCartHidden}
                                />
                            )
                        }
                    </Query>
                )
            }
        </Mutation>
    )
}

export default CartDropdownContainer;

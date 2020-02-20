import React from 'react'
import { graphql } from 'react-apollo'
import { flowRight } from 'lodash'
import CartIcon from './cart-icon.component'
import { GET_ITEM_COUNT } from '../../graphql/query'
import { TOGGLE_CART_HIDDEN } from '../../graphql/mutation'

const CartIconContainer = ({ data: { itemCount }, toggleCartHidden }) => {
    return (
        <CartIcon itemCount={itemCount}  toggleCartHidden={toggleCartHidden} />
    )
}

export default flowRight(
    graphql(GET_ITEM_COUNT),
    graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden' })
)(CartIconContainer);

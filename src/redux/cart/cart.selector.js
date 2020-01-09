import { createSelector } from 'reselect'

const selectCart = sate => sate.cart;
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        ( cumulative, cartItem) =>
        cumulative + cartItem.quantity,
        0
    )
)

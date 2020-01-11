import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors' 
import { selectCurrentUser } from '../../redux/user/user.selectors' 

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles'

export const Header = ({ currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>

            <OptionsContainer>
                <OptionLink className="option" to="/shop">SHOP</OptionLink>
                <OptionLink className="option" to="/shop">CONTACT</OptionLink>
                {
                    currentUser ?
                    <OptionLink as='div' className="option" onClick={() => auth.signOut()}> SIGN OUT</OptionLink>
                    :
                    <OptionLink className="option" to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null :
                <CartDropdown/>
            }
        </HeaderContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);
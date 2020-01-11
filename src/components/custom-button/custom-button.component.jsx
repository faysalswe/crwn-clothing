import React from 'react';
import { CustomButtonContainer } from './custom-button.styles'

const ButtonCustom = ({ children, ...props}) => {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default ButtonCustom;

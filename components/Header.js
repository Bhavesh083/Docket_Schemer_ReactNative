import React from 'react'

import { HeaderView, HeaderTitle, HeaderButton, colors } from '../styles/appStyles';

import {Entypo} from '@expo/vector-icons';

function Header({handleClearTodos}) {
    return (
        <HeaderView>
            <HeaderTitle>Docket Schemer</HeaderTitle>
            <HeaderButton onPress={handleClearTodos}>
                <Entypo name="trash" size={23} color={colors.secondary} />
            </HeaderButton>
        </HeaderView>
    );
}
export default Header;
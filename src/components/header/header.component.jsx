import React from 'react';

import {
    HeaderContainer,
    OptionsContainer,
    OptionLink
  } from './header.styles';
  
  const Header = () => (
    <HeaderContainer>
      <OptionsContainer>
        <OptionLink to='/'>Inicio</OptionLink>
        <OptionLink to='/restaurant'>Restaurante</OptionLink>
        <OptionLink to='/lodgement'>Hospedaje</OptionLink>
        <OptionLink to='/contact'>Contacto</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );

export default Header;
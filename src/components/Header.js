import React from "react"
import Logo from '../images/LGG_logo_VER2.png'
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 0 80px;
  background: #fff;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,0.3);
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  a {
    flex: 0 0 15%;
  }
`;

const StyledLogo = styled.a`
flex: 0 0 15%;
flex-flow: row wrap;

img {
  height: 100px;
}

`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledLogo href='/'>
          <img src={Logo} alt='Lets Get Gaming' />
        </StyledLogo>
        <Navigation />
      </Container>

    </StyledHeader>
  );
}

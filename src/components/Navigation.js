import React from 'react'
import styled from 'styled-components'
import DiscordButton from './DiscordButton'

const StyledNav = styled.nav`
  flex: 0 0 77%;
  flex-flow: row wrap;
  margin-left: 4%;

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    display: inline-block;
    text-align: center;
  }

  ul li a {
    display: block;
    padding: 0 24px;
    line-height: 125px;
    letter-spacing: 1px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: normal;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: 0 0 8px rgba(42, 42, 42, 0.3);
    &:hover {
      color: #1964a3;
    }
  }
`;



const Link = styled.a`
  color: black;
  text-decoration: none;
`;

export default function Navigation() {

  return (
    <StyledNav>
      <div>
        <ul>
          <li>
            <a href='/'><span>Home</span></a>
          </li>
          <li>
            <a href='/'><span>Our Roster</span></a>
          </li>
          <li>
            <a href='https://www.youtube.com/channel/UCrrNk98prI3r5vaXE-BCa4Q/featured'><span>Videos</span></a>
          </li>
          <li>
            <a href='/'><span>About</span></a>
          </li>
          <li>
            <a href='/'><span>Contact</span></a>
          </li>
          <li>
            <DiscordButton>join us</DiscordButton>
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

import React from "react";
import {
  NavBarContainer,
  Logo,
  NavLinkContainer,
  SocialIconContainer,
  SocialIcon,
  LogoContainer,
  NavLink,
} from "../styles/HeaderStyles";
import { FaLaptopCode, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {BiMailSend} from 'react-icons/bi'

export default function Header() {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo href="/">
          <img src="/reLogo.png" height="36px" /> Portfolio
        </Logo>
      </LogoContainer>
      <NavLinkContainer>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#tech">Technologies</NavLink>
        <NavLink href="#about">About Me</NavLink>
      </NavLinkContainer>
      <SocialIconContainer>
        <SocialIcon href="https://github.com/rerlache" target="_blank">
          <FaGithubSquare />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/robin-erlacher-4ba8bb229/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="mailto:main@robinerlacher.online">
            <BiMailSend />
        </SocialIcon>
      </SocialIconContainer>
    </NavBarContainer>
  );
}

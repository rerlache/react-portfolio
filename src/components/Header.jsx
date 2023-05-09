import {
  Logo,
  NavLinkContainer,
  LogoContainer,
  NavLink,
  NavBarcontainer,
  ToggleInput,
  ToggleLabel,
} from "../styles/HeaderStyles";

import { TfiMenu } from "react-icons/tfi";
import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallWidth, setIsSmallWidth] = useState(window.innerWidth < 767 ? true : false,
  )

  useEffect(() => {
    function handleResize() {
      setIsSmallWidth(window.innerWidth < 767)
      setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, []);
  return (
    <NavBarcontainer>
      <LogoContainer>
        <Logo href="/">
          <img src="/reLogo.png" height="36px" /> Portfolio
        </Logo>
      </LogoContainer>
      <ToggleInput
        type="checkbox"
        id="navbar-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <ToggleLabel htmlFor="navbar-toggle">
        <TfiMenu />
      </ToggleLabel>
      <NavLinkContainer>
        <NavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
        <NavLink href="#tech" onClick={() => setIsOpen(false)}>Technologies</NavLink>
        <NavLink href="#about" onClick={() => setIsOpen(false)}>About Me</NavLink>
        <SocialIcons display={isOpen} />
      </NavLinkContainer>
      <SocialIcons display={!isOpen && !isSmallWidth} />
    </NavBarcontainer>
  );
}

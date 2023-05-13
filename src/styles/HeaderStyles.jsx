import styled from "styled-components";

export const NavBarcontainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(var(--primary-darkColor));
  color: rgba(var(--primary-lightColor));
  padding: .75rem 2rem;
  font-size: 1.5rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  box-shadow: 0px 2px 15px rgba(var(--secondary-darkColor));
  
  @media only screen and (max-width: 767px) {
    flex-wrap: nowrap;
`;
export const LogoContainer = styled.div``;
export const Logo = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;
export const ToggleInput = styled.input`
  display: none;

  @media only screen and (max-width: 767px) {
    cursor: pointer;
    position: relative;
    top: 5px;
    right: 0;
    margin-right: 20px;
  }
`;
export const ToggleLabel = styled.label`
  display: none;
  @media only screen and (max-width: 767px) {
    display: block;
    cursor: pointer;
  }
`;
export const NavLinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  background-color: rgba(var(--primary-darkColor));

  @media only screen and (max-width: 767px) {
    display: none;

    ${ToggleInput}:checked ~ & {
      display: flex;
      flex-direction: column;
      margin-right: 0;
      width: 100%;
      padding: 20px;
      position: absolute;
      top: 45px;
      left: 0;
      z-index: 99999;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
  }
`;
export const NavLink = styled.a`
  color: inherit;
  font-size: 1.2rem;
  display: block;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transistion: all 0.3s ease;
  background-color: rgba(var(--primary-darkColor));
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    font-weight: bold;
  }
`;
export const SocialIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px
`;
export const SocialIcon = styled.a`
  display: flex;
  transition: 0.3s ease;
  color: inherit;
  padding: 0.45rem;
  text-align: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background-color: rgba(var(--primary-lightColor));
    color: rgba(var(--primary-accentColor));
    transform: scale(1.2);
    cursor: pointer;
  }
`;

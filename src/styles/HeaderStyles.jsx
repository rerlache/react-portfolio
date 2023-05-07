import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 0.75rem;
  background-color: var(--primary-dark-bgColor);
  color: var(--primary-light-textColor);
  font-size: 1.5rem;
`;
export const LogoContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NavLinkContainer = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SocialIconContainer = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
/*@media ${(props) => props.theme.breakpoints.sm} {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 60px);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;}*/

export const Logo = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    font-weight: bold;
  }
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
    background-color: var(--primary-light-textColor);
    color: var(--primary-dark-bgColor);
    transform: scale(1.2);
    cursor: pointer;
  }
`;

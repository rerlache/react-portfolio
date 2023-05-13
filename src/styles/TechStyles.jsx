import { styled } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  margin: 0;
  padding: 0;

  @media (width < 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (width < 550px) {
    grid-template-columns: 1fr;
  }
`;
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ListParagraph = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: rgba(var(--primary-lightColor));
`;
export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
  text-transform: uppercase;
  margin-top: .75rem;
  
  background: linear-gradient(
    121.57deg,
    rgba(255, 255, 255, 0.66) 18.77%,
    #ffffff 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (width < 850px) {
    margin-top: 0;
  }
`;
export const ListIcon = styled.svg`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  color: rgba(var(--primary-lightColor));
`;

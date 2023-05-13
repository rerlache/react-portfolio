import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;

  @media (width < 550px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const Card = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(var(--primary-lightColor));
  text-align: center;
  width: 400px;
  @media (width < 850px) {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
export const CardTitle = styled.div`
  font-weight: 700;
  letter-spacing: .2rem;
  color: rgba(var(--secondary-lightColor));
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;
export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: rgba(var(--primary-lightColor));
`;
export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media (width < 850px) {
    padding: 0.3rem;
  }
`;
export const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;
export const ListItem = styled.li`
`;
export const Link = styled.a`
  color: rgba(var(--secondary-darkColor));
  font-size: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(var(--primary-lightColor), 1);
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    color: rgba(var(--secondary-lightColor));
    background: rgba(var(--primary-accentColor), .75);
  }
`;
export const TagList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: .5rem;
  `;
  export const Tag = styled.li`
  color: rgba(var(--secondary-lightColor));
  font-size: .75rem;
  padding: .5rem;
  border-radius: .5rem;
  background: rgba(var(--primary-accentColor), .5);
`;

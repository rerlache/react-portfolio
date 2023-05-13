import {
  SectionContainer,
  SectionHeader,
  SectionText,
} from "../styles/GlobalStyles";
import { List, ListItem, ListContainer, ListTitle, ListIcon, ListParagraph } from "../styles/TechStyles";
import { TechData } from "../data/TechData";

export default function Technologies() {
  return (
    <SectionContainer>
      <SectionHeader main="true">Technologies</SectionHeader>
      <SectionText>
        I worked with a lot of technologies since i started working.
        <br /> Here are just a few:
      </SectionText>
      <List>
        {TechData.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListContainer>
                <ListIcon>{item.icon}</ListIcon>
                <ListTitle>{item.category}</ListTitle>
              </ListContainer>
              <ListParagraph>
              Experience with:
              <br />
              {item.items.join(", ")}
              </ListParagraph>
            </ListItem>
          );
        })}
      </List>
    </SectionContainer>
  );
}

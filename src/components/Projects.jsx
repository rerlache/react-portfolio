import {
  SectionContainer,
  SectionHeader,
  SectionText,
} from "../styles/GlobalStyles";
import {
  Card,
  CardInfo,
  CardTitle,
  Grid,
  Hr,
  Img,
  Link,
  LinkList,
  ListItem,
  Tag,
  TagList,
} from "../styles/ProjectStyles";
import { ProjectData } from "../data/ProjectData";

export default function Projects() {
  return (
    <SectionContainer>
      <SectionHeader main="true">Projects</SectionHeader>
      <SectionText>Here are some of the projects i did.</SectionText>
      <Grid>
        {ProjectData.filter((project) => project.id !== 0).map(
          ({ id, name, description, previewImg, previewUrl, tags, gitUrl }) => {
            return (
              <Card key={id}>
                <Img src={previewImg} />
                <CardTitle>{name}</CardTitle>
                <Hr />
                <CardInfo>{description}</CardInfo>
                Stack
                <TagList>
                  {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
                <LinkList>
                  <ListItem>
                    <Link target="_blank" href={previewUrl}>
                      Show
                    </Link>
                  </ListItem>
                  {gitUrl !== "" ? (
                    <ListItem>
                      <Link target="_blank" href={gitUrl}>
                        Code
                      </Link>
                    </ListItem>
                  ) : (
                    ""
                  )}
                </LinkList>
              </Card>
            );
          }
        )}
      </Grid>
    </SectionContainer>
  );
}

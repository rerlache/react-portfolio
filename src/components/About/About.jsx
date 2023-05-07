import Timeline from "./Timeline";
import Contact from "./Contact";
import { IntroductionSection } from "../../styles/AboutStyles";
import {
  Section,
  SectionContainer,
  SectionDivider,
  SectionHeader,
} from "../../styles/GlobalStyles";

export default function About() {
  return (
    <>
      <SectionContainer id="about">
        <SectionHeader main>About Me</SectionHeader>
        <IntroductionSection>
          I started my development journey 2018. As i got more into PowerApps,
          Flow and the DataVerse and created some nice apps with these Low-Code
          apps.
        </IntroductionSection>
      </SectionContainer>
      <Section primary row>
        <Timeline />
      </Section>
      <SectionDivider primary />
      <Section nopadding nomargin>
        <Contact />
      </Section>
      <SectionDivider />    
    </>
  );
}

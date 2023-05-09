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
      <SectionContainer>
        <SectionHeader main="true">About Me</SectionHeader>
        <IntroductionSection>
          I started my development journey 2018. As i got more into PowerApps,
          Flow and the DataVerse and created some nice apps with these Low-Code
          apps.
        </IntroductionSection>
      </SectionContainer>
      <Section primary="true" row="true">
        <Timeline />
      </Section>
      <SectionDivider primary="true" />
      <Section nopadding="true" nomargin="true">
        <Contact />
      </Section>
      <SectionDivider />    
    </>
  );
}

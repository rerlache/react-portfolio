import Timeline from "./Timeline";
import Contact from "./Contact";
import { IntroductionSection } from "../../styles/AboutStyles";
import {
  Section,
  SectionContainer,
  SectionDivider,
  SectionHeader,
  SectionText,
} from "../../styles/GlobalStyles";

export default function About() {
  return (
    <>
      <Section primary="true" nomargin="true">
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

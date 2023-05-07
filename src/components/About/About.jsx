import React from "react";
import Timeline from "./Timeline";
import Contact from "./Contact";
import {
  ContactSection,
  TimelineSection,
} from "../../styles/AboutStyles";
import { AboutSection } from "../../styles/GlobalStyles";

export default function About() {
  return (
    <AboutSection id="about">
      <TimelineSection>
        <Timeline />
      </TimelineSection>
      <ContactSection>
        <Contact />
      </ContactSection>
    </AboutSection>
  );
}

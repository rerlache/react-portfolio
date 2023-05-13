import React from "react";
import { Section, SectionHeader, SectionText } from "../../styles/GlobalStyles";

export default function Timeline() {
  return (
    <Section primary="true" row="true">
    <SectionHeader>Timeline</SectionHeader>
      <SectionText>
        <ul>
          <li>2002: started job in IT</li>
          <li>2007: started working with sharepoint</li>
          <li>2016: switched from helpdesk to system administrator position</li>
          <li>2017: power platform triggered interest in coding</li>
          <li>2018: started c# with small console apps</li>
          <li>2021: started developer journey with c# course</li>
          <li>2022: wanted to do more devolpment -&gt; changed job</li>
          <li>2023: started learning react.js</li>
        </ul>
      </SectionText>
    </Section>
  );
}

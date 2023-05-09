import React from "react";
import { SectionContainer, SectionHeader, SectionText } from "../styles/GlobalStyles";

export default function Hero() {
  return (
    <SectionContainer>
      <SectionHeader main="true">Welcome to<br /> my personal portfolio.</SectionHeader>
      <SectionText>
        at the moment this site is not responsive, but i'm working on that aswell as on the content in general.
      </SectionText>
    </SectionContainer>
  );
}

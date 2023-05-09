import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import About from "./components/About/About";
import Layout from "./layouts/Layout";
import { Section, SectionDivider } from "./styles/GlobalStyles";
import BackgroundAnimation from "./components/BgAnimation";

function App() {
  return (
    <Layout>
      <Section grid="true" center="true">
        <Hero />
        <BackgroundAnimation />
      </Section>
      <SectionDivider id="projects" />
      <Section primary="true">
        <Projects />
      </Section>
      <SectionDivider primary="true" id="tech" />
      <Section>
        <Technologies />
      </Section>
      <SectionDivider id="about" />
      <Section primary="true" nopadding="true">
        <About />
      </Section>
    </Layout>
  );
}

export default App;

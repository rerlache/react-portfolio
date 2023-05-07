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
      <Section grid center>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <SectionDivider />
      <Section primary>
        <Projects />
      </Section>
      <SectionDivider primary />
      <Section>
        <Technologies />
      </Section>
      <SectionDivider />
      <Section primary nopadding>
        <About />
      </Section>
    </Layout>
  );
}

export default App;

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import About from "./components/About/About";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
      <About />
    </Layout>
  );
}

export default App;

import { Container } from "../styles/LayoutStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Section } from "../styles/GlobalStyles";

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Section primary="true">
        <Footer />
      </Section>
    </Container>
  );
}

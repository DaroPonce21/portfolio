import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;

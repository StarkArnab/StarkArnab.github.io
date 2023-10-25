import "./App.css";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;

import Navbar from "./component/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default HomePage;
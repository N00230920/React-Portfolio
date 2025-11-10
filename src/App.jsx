import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from "./pages/PageNotFound";
import ProjectIndex from "@/pages/projects/index";

//Import components
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";


export default function App() {
  return (
            <div className="min-h-screen bg-background text-foreground relative">
              <NavBar />
            <main className="max-w-4xl mx-auto ">
                <Intro />
                <Projects />
                <Contacts />
                <Footer />
            </main>
        </div>
    // <Router>
    //   <NavBar />
    //   <h1>Hello from App</h1>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="*" element={<PageNotFound />} />
    //     <Route path="/projects" element={<ProjectIndex />} />

    //     {/* projects */}



    //   </Routes>
    //   <Footer />
    // </Router>
      
  );
};


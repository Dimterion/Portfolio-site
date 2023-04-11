import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Studies from "./pages/Studies/Studies";
import Tasks from "./pages/Tasks/Tasks";
import Other from "./pages/Other/Other";
import JsChallenges from "./pages/JsChallenges/JsChallenges";
import Footer from "./components/Footer/Footer";
import DupFinder from "./pages/DupFinder/DupFinder";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="studies" element={<Studies />} />
        <Route path="other" element={<Other />} />
        <Route path="text-edit-form" element={<JsChallenges />} />
        <Route path="dup-finder" element={<DupFinder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

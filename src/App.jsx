import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Experience />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

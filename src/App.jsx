import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <About />
                <TechStack />
                <Contact />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

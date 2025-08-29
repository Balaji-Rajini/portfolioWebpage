import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./components/Intro";
import Contact from "./components/Contact";
import About from "./components/About";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* ✅ Show all components on home page */}
          <Route path="/" element={<><Intro /><About /><TechStack /><Contact /></>} />

          {/* ✅ OR use separate pages */}
          
          <Route path="/about" element={<About />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

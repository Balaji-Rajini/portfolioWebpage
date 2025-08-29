import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import About from "./components/About";
import TechStack from "./components/TechStack";


// Example component

function App() {
  return (<div className="">
    <BrowserRouter>
      <Routes>
        {/* ✅ Wrap Route inside Routes & use capitalized component */}
        <Route path="/" element={<><Intro/> , <About/><TechStack/> <Contact/></>} />
                <Route path="/" element={<About/>} />
        <Route path="/" element={<TechStack/>} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

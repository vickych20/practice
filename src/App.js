
import React from 'react';
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
 
  import Home from './components/Home'
  import Profiles from "./components/Profiles";
  import Stories from "./components/Stories";
  import Pages from "./components/Pages";
  import Blog from "./components/Blog";
import First from './components/First/First';
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="max-md:hidden max-xl:hidden">
        <First />
      </div>
      {/* */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App

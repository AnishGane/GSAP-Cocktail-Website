import React from "react";

// import Plugins
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Register in the app for global usage
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default App;

import React from "react";

// import Plugins
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

// Register in the app for global usage
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <div className="flex-center">App</div>;
};

export default App;

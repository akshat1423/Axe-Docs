import React from "react";
import Background from "./components/Background";
import Foregrond from "./components/Foregrond";
const App = () => {
  return (
    <div className="relative bg-zinc-800 w-full h-screen">
      <Background />
      <Foregrond />
    </div>
  );
};

export default App;

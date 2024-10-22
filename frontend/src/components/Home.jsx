import React from "react";

import Hero from "./Hero";
import HomeBooks from "./HomeBooks";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-600 container mx-auto">
      <Hero />
      <HomeBooks />
    </main>
  );
};

export default Home;

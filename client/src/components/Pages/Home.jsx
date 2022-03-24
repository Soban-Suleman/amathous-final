import React from "react";
import Graph from "../HomeComponents/Graph";
import Header from "../HomeComponents/Header";
import NewsLetters from "../HomeComponents/NewsLetters";
import Philos from "../HomeComponents/Philos";
import SignUpButton from "../HomeComponents/SignUpButton";
import TheNumber from "../HomeComponents/TheNumber";
import WhatWe from "../HomeComponents/WhatWe";

const Home = () => {
  return (
    <>
      <Header />
      <WhatWe />
      <SignUpButton />
      <Graph />
      <Philos />
      <TheNumber />
      <NewsLetters />
    </>
  );
};

export default Home;

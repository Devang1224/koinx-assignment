import Performance from "@/components/sections/Performance";
import React from "react";
import Sentiment from "./Sentiment";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Team from "./Team";

const Details = () => {
  return (
    <div>
      <div className="my-6 overflow-x-auto no-srollbar borderBottom">
        <div className="flex items-center gap-10 text-nowrap font-medium h-[50px]">
          <p className="navDetails">Overview</p>
          <p className="navDetails">Fundamentals</p>
          <p className="navDetails">News Insights</p>
          <p className="navDetails">Sentiments</p>
          <p className="navDetails">Team</p>
          <p className="navDetails">Technicals</p>
          <p className="navDetails">Tokenomics</p>
        </div>
      </div>

      <Performance />
      <Sentiment />
      <About />
      <Tokenomics />
      <Team />
    </div>
  );
};

export default Details;

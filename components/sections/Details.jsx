import Performance from "@/components/sections/Performance";
import React from 'react'

const Details = () => {
  return (
    <div>

      <div className="py-6">
        <div className="flex items-center gap-10   borderBottom font-semibold h-[50px]">
          <p className="navDetails">Overview</p>
          <p className="navDetails">Fundamentals</p>
          <p className="navDetails">News Insights</p>
          <p className="navDetails">Sentiments</p>
          <p className="navDetails">Team</p>
          <p className="navDetails">Technicals</p>
          <p className="navDetails">Tokenomics</p>
        </div>
      </div>

      <Performance/>
   </div>
  ) 
}

export default Details
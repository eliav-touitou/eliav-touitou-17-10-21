import React, { useState, useEffect } from "react";
import CitySection from "./CitySection";
import Forecast from "./Forecast";
import SearchBox from "./SearchBox";

export default function Home() {
  return (
    <>
      <CitySection />
      <div className="info-side">
        <div className="today-info-container">
          <div className="today-info">
            <SearchBox />
          </div>
        </div>
        <Forecast />
      </div>
    </>
  );
}

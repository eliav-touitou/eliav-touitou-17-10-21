import React, { useState } from "react";
import CitySection from "./CitySection";
import Forecast from "./Forecast";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="search-section">
        <input onChange={(e) => setSearch(e.target.value)} />
        <button>search!</button>
      </div>
      <CitySection />
      <Forecast />
    </div>
  );
}

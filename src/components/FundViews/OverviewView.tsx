// React
import React from "react";
// Components
import ResultsChart from "../Chart/ResultsChart";

export default function OverviewView() {
  const performance = 12;
  const aum = 748332343.32;
  const personalBalance = 8974.31;
  return (
    <main>
      <ResultsChart
        personalBalance={personalBalance}
        aum={aum}
        performance={performance}
      />
    </main>
  );
}

import WeatherChart from "@/components/WeatherChart";
import { Suspense } from "react";

export default function Home() {
  return (
    <h1>
      Hello World
      <br />
      <Suspense fallback={<div>...</div>}>
        <WeatherChart />
      </Suspense>
    </h1>
  );
}

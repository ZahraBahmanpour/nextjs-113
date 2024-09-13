export default async function WeatherChart() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="border" style={{ height: "200px", width: "300px" }}>
      WeatherChart
    </div>
  );
}

import { BarChart } from "@mui/x-charts/BarChart";

function MyBarGraph() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["Male", "Female", "Other"] }]}
      series={[{ data: [4] }, { data: [1] }, { data: [2] }]}
      width={500}
      height={300}
    />
  );
}

function Age() {
  return (
    <div>
      <div className="bg-white">
        {/* TODO: Bar Graph */}
        <MyBarGraph />
      </div>
    </div>
  );
}

export default Age;

import { BarChart } from "@mui/x-charts/BarChart";

function MyBarGraph() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["Sex"] }]}
      series={[
        { data: [100], label: "Male", color: "#38BDF8" },
        { data: [20], label: "Female", color: "#F472B6" },
      ]}
      width={250}
      height={300}
    />
  );
}

function PieChart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "series A" },
            { id: 1, value: 15, label: "series B" },
            { id: 2, value: 20, label: "series C" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}

function Age() {
  return (
    <div>
      <div>
        {/* TODO: Bar Graph */}
        <MyBarGraph />
      </div>

      <br />
      <div>
        <PieChart></PieChart>
      </div>
    </div>
  );
}

export default Age;

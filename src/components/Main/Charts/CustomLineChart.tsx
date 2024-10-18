import { LineChart } from "@mui/x-charts/LineChart";

const CustomLineChart = () => {
  return (
    <div className="">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            curve: "linear",
            data: [70000, 100000, 90000, 20000, 81000, 0],
            area: true,
          },
          {
            curve: "linear",
            data: [50000, 60000, 40000, 50000, 51000, 60000],
            area: true,
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default CustomLineChart;
